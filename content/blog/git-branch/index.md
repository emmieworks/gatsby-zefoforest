---
title: 【gitでバージョン管理】ブランチの使い方とSourcetreeでの操作
date: 2020-04-11T12:00:00+09:00
updateDate: 2020-08-22
category: WebNote
tags:
    - git
    - Sourcetree
status: published
---

 バージョン管理では変更履歴を分けて管理できます。（「ブランチ」といいます。）

 知っておくと便利！実際どう使うの？🤔を解説します。

<div class="border-box">
<span>この記事でわかること<span>

* バージョン管理でのブランチって何？
* 個人開発をするときの、ブランチの使い方
* Sourcetreeを使ったブランチの作成、切替え、マージ方法

</div>

gitでバージョン管理を使っている方はやってみてください。

## gitで使うブランチとは？

**「ブランチ」とは変更履歴を分けて管理すること**です。

ブランチ＝branch（枝）で、木の幹から枝が派生するイメージ。

ゲームのシナリオ分岐をイメージしてもらうと分かりやすいかも。
AとBのどちらを仲間にするかの選択があって、Aを選んだけど、Bを仲間にしたときのエピソードを見たいときにセーブ分けますよね？

Gitでは、本筋のセーブをmasterブランチと呼んでいます。
master ブランチは**納品用、完成品バージョン**として使います。

<div class="border-box">
<span>ブランチの使い方</span>

* 開発したいとき→開発ようにブランチを分ける。完成したら、masterに合流。
* 完成品に追加の機能をつけたいときに→追加機能用のブランチを分ける。
* このやり方でうまくいくか度試すとき→ブランチを分けて試しで作ってみて、うまくいかなかったらブランチごと捨てる。
</div>

## ブランチの使い方

Sourcetreeを使って、実際にやってみましょう。

まず最初にコミットをすると「master」というブランチが作られます。
そのままだと、その後のコミットも、「master」に履歴が追加されていきます。

### ブランチを分ける

分岐を作りたい箇所を選択して、上部の「branch」をクリックします。

![ブランチ作成](ss-sourcetree-branch-01.jpg)

ブランチの名前を入力して「Create Branch」を押す

![ブランチ作成](ss-sourcetree-branch-02.jpg)

新しいブランチ「topic」ができました。

![ブランチ作成](ss-sourcetree-branch-03.jpg)

このあとコミットしていくと、topicブランチにバージョン履歴がたまっていきます。

![ブランチ作成](ss-sourcetree-branch-05.jpg)

### ブランチを切り替える

ブランチはダブルクリックすると、切り替えることができます。


![ブランチの切り替え](ss-sourcetree-branch-04.jpg)

○がついているのが選択中のブランチ

### masterブランチに統合する

masterブランチにtopicを統合します。（masterにtopicを吸収させるイメージ。）

まずはブランチを切り替えます。masterの方をダブルクリックすると、masterに切り替わります。

![ブランチのマージ](ss-sourcetree-branch-06-1.jpg)
そして、ここで「merge(マージ）」をクリックします。

 マージさせるコミットを選択します。

![ブランチのマージ](ss-sourcetree-branch-08.jpg)

マージができると、masterとtopicが同じ箇所に印がつきます

## ブランチの削除

masterを選択した状態で、上部の「Branch」を選択します。

「Delete Branch」を選んで先ほど作成した「topic」をチェックを入れて、「Delete Branches」とするとブランチを削除できます。

![ブランチの削除](ss-sourcetree-branch-09.jpg)

以上、ブランチの使い方と、操作方法の紹介でした！


<div class="related-posts">
    <span>バージョン管理のはじめかた</span>

1. [gitとSourcetreeをインストールして、バージョン管理をはじめる](/install-sourcetree/)
2. [GitHubインストールとプロジェクトでの使い方](/git-install/)
3. [間違えて保存・コミットしたときに元に戻す方法まとめ](/git-rebase/)
4. [ブランチの使い方とSourcetreeでの操作]（この記事）
5. [GitHubでソースコードをブログに載せる方法まとめ](/github-gist-wordpress/)

</div>