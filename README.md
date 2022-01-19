# vue-laravel-spa

SPA アプリケーションの構築
実務で使用した環境の簡易的な再現

## 構成

### フロントエンド

- vue 3.2
- vue-router
- element-plus（UI フレームワーク）

#### client コンテナ 実行

```
yarn
yarn dev
```

### バックエンド

- nginx
- php 8
- laravel
- mysql 8

#### php コンテナ 初期化

```
chown -R www-data:www-data storage/
php artisan migrate
```
