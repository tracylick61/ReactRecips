/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // чтобы генерировать статичный сайт
  basePath: '/ReactRecips', // если сайт будет в папке репозитория
  // trailingSlash: true, // если хочешь, чтобы URL оканчивались слэшем
}

module.exports = nextConfig
