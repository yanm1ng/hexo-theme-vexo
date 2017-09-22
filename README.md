# Vexo = Vue.js Style + Hexo 

> Vexo is a Hexo theme inspired by [Vue.js](https://cn.vuejs.org) official website.

[![Build Status](https://travis-ci.org/yanm1ng/hexo-theme-vexo.svg?branch=master)](https://travis-ci.org/yanm1ng/hexo-theme-vexo)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Intro

![](http://file.muyutech.com/vexo.png)

## Demo

[Live Example](https://yanm1ng.github.io/)

## Features

* Fully Responsive
* Baidu Analytics
* [Youyan](http://www.uyan.cc/)
* [Gitment](https://imsun.github.io/gitment/)
* Share Qrcode
* SEO
* Immersive Status Bar
* Article Catalog

## Install

1. Download/Checkout this theme into your project

   ```
   cd your-hexo-folder

   git clone https://github.com/yanm1ng/hexo-theme-vexo.git themes/vexo

   cp -R themes/vexo/_source/* source/
   ```

2. Update project `_config.yml` theme config, look like this

   ```
   themes: vexo
   ```

   Here theme's name must same as the theme folder name.

3. Modify theme `themes/vexo/_config.yml` with your own info.

4. That's all , hope you will like :)

## Update Version

```
cd themes/vexo
git pull
```

## Post

The **front-matter** of a post looks like that:

```
---
title: "Hello World"
date: 2016-06-10 23:00
banner: your-banner-link.jpg
tags:
 - Movies
 - Life
---
```

Add this to the top of your article markdown file. 

## Change Log  
**2017-09-21**
* Added article catalog
* Fixed bugs

**2017-08-08**
* Added article custom banner
* Fixed gitment error

**2017-06-27** 
* Added image-zoom
* Added project-link

**2017-06-25**
* Added image load `onerror` replace default image
* Added page [loading-bar](https://github.com/rstacruz/nprogress)
* Fixed bugs

**2017-06-23** 
* Added project page to show github project
* Fixed share url error
* Support markdown `table` & `hr`

**2017-06-20**  
* Added personal link icons, support: 
  * github 
  * zhihu 
  * twitter 
  * weibo
* Fixed bugs

**2017-06-15**  
* Add personal about page
* Replace font-family
* Ignore text-autosizer/font-boosting on mobile-device
* Fixed bugs

**2017-06-12**  
* Added enter-out transition
* Fixed bugs

**2017-06-11**
* Added archive page
* Fixed HighLight code line-number bug
* Adjust home post display problem
* Thanks @ky0ncheng issue

## Comment

Vexo use [Gitment](https://github.com/imsun/gitment) as the third party discussion system.

You can easily complete your comment configuration by just adding your settings into `_config.yml`

```
# Gitment
gitment_owner: yanm1ng
gitment_repo: yanm1ng.github.io
gitment_oauth_id: 
gitment_oauth_secret: 
```

How to use Gitment ? [See](https://imsun.github.io/gitment/)

## Reward

You can replace your own Alipay/Wechat qrcode in `themes/source/css/images` 

Here the name must same as `alipay.jpg` or `wechat.jpg`.

## Links

You can easily add your social account by just adding your settings into `_config.yml`
```
# Links
weibo_username: your_weibo_account
twitter_username: your_twitter_account
github_username: your_github_account
zhihu_username: your_zhihu_account
```

## About

- Give a star if you like , fork or just clone to use , and also you can help me fix bugs and add new feature :)
- If you have any problem or requirement , just open an issue here and i will help you.
- Thanks to [@imsun](https://github.com/imsun) , [@Evan You](https://github.com/yyx990803) and [@Hexo](https://hexo.io).

## LICENSE
MIT