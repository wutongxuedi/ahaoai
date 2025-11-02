const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// 压缩配置
const config = {
  timeline: {
    width: 800,
    quality: 80,
    format: 'jpeg'
  },
  qrcode: {
    width: 500,
    quality: 85,
    format: 'jpeg'
  }
};

// 获取所有图片文件
async function getAllImages(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getAllImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// 压缩单个图片
async function compressImage(filePath) {
  try {
    const relativePath = path.relative(imagesDir, filePath);
    const dirName = relativePath.split(path.sep)[0];
    const fileName = path.basename(filePath);
    
    // 获取对应目录的配置
    const compressionConfig = config[dirName] || config.timeline;
    
    // 获取原始文件大小
    const originalStats = fs.statSync(filePath);
    const originalSize = (originalStats.size / 1024).toFixed(2);
    
    // 创建备份
    const backupPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.backup.$1');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }
    
    // 压缩图片
    await sharp(filePath)
      .resize(compressionConfig.width, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: compressionConfig.quality, progressive: true })
      .toFile(filePath + '.tmp');
    
    // 替换原文件
    fs.renameSync(filePath + '.tmp', filePath);
    
    // 获取压缩后文件大小
    const compressedStats = fs.statSync(filePath);
    const compressedSize = (compressedStats.size / 1024).toFixed(2);
    const reduction = ((1 - compressedStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`✅ ${fileName}: ${originalSize}KB → ${compressedSize}KB (减少 ${reduction}%)`);
    
    return {
      file: fileName,
      originalSize,
      compressedSize,
      reduction
    };
  } catch (error) {
    console.error(`❌ 压缩失败 ${path.basename(filePath)}:`, error.message);
    return null;
  }
}

// 主函数
async function main() {
  console.log('🚀 开始压缩图片...\n');
  
  const images = await getAllImages(imagesDir);
  console.log(`📸 找到 ${images.length} 张图片\n`);
  
  const results = [];
  
  for (const imagePath of images) {
    const result = await compressImage(imagePath);
    if (result) {
      results.push(result);
    }
  }
  
  console.log('\n📊 压缩统计：');
  const totalOriginal = results.reduce((sum, r) => sum + parseFloat(r.originalSize), 0);
  const totalCompressed = results.reduce((sum, r) => sum + parseFloat(r.compressedSize), 0);
  const totalReduction = ((1 - totalCompressed / totalOriginal) * 100).toFixed(1);
  
  console.log(`总大小: ${totalOriginal.toFixed(2)}KB → ${totalCompressed.toFixed(2)}KB`);
  console.log(`总共减少: ${totalReduction}%`);
  console.log(`\n✨ 压缩完成！`);
  console.log(`💡 原始文件已备份为 .backup 扩展名`);
}

main().catch(console.error);

