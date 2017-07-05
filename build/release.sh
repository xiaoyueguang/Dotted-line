echo "输入版本号: "
read VERSION = $1

echo '版本为:'$VERSION

npm run test:cover

npm run build
