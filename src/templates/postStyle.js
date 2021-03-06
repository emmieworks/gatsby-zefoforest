import styled from "styled-components"

const Wrapper = styled.div`
  width:var(--width);
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }

  /* ===============================================
  #  title area
  =============================================== */
  article {
    header {
      margin-top: var(--smallMargin);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .category {
        font-size: 0.9rem;
        font-style: italic;
        position: relative;
        padding: 0 35px;
        color: var(--secondary);
        &:before,
        &:after {
          content: "";
          width: 20px;
          height: 1px;
          background: var(--secondary);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }
      .info{
        margin: 10px;
        padding:10px;
      }
      .date{
        font-size:0.8rem;
        color: var(--secondary);
        padding: 10px;
      }
      .tag{
        font-size:0.8rem;
        margin-right:10px;
        color:var(--primary);
        border: 1px solid var(--primary);
        border-radius:5px;
        padding: 3px 5px;
        text-decoration:none;
        &:before{
          content: '#'
        }
        &:hover{
          background-color: var(--primary);
          color:var(--white);
        }
      }
    }
    h1 {
        font-size: 1.6rem;
        font-weight: 600;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 30px;
        color:var(--secondary);
    }
    /* ===============================================
    #  Table of Contents
    =============================================== */
    .toc {
      width: auto;
      background: var(--white);
      border:1px solid var(--primary);
      padding: 20px 30px 10px 30px;
      font-size: 0.9rem;
      margin: 50px 0;
      border-radius: 3px;
      h4{
        color: var(--primary);
        text-align:center;
      }
      ul {
        width: auto;
        margin: 0;
        padding-left: 20px;
        li {
          padding: 10px 0;
          color:  var(--primary);
          list-style: decimal;
          line-height: 1.2;
          p {
            padding-bottom: 10px;
          }
          &:last-child {
            border-bottom: none;
          }
        }
        a {
          text-decoration: none;
        }
        ul {
          padding-left: 30px;
        }
      }
    }
    @media screen and (max-width: 780px) {
      .toc {
        margin: 30px 0;
        padding: 20px 20px 10px 20px;
      }
    }

    section {
      /* ===============================================
      #  header
      =============================================== */
      p {
        line-height: 1.8;
        margin: var(--smallMargin) 0;
      }
      h2 {
        color:var(--secondary);
        width: 100%;
        font-size: 1.2rem;
        margin-top: 100px;
        padding-top:10px;
        padding-bottom: 10px;
        margin-bottom: var(--middleMargin);
        font-weight: 600;
        width: 100%;
        border-top: 1px solid var(--secondary);
        border-bottom: 1px solid var(--secondary);
      }
      h3 {
        color:var(--secondary);
        font-size: 1.2rem;
        font-weight: 600;
        margin-top:  var(--middleMargin);
        margin-bottom: var(--middleMargin);
        padding: 7px 0 7px 15px;
        border-left: 3px double var(--secondary);
      }
      h4 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 14px 10px;
        border-left: 2px solid var(--secondary);
      }
      h5,
      h6 {
        font-weight: 600;
        padding-top: 20px;
        margin-bottom: 10px;
      }
      /* ===============================================
      #  list
      =============================================== */
      ul,
      ol {
        margin: 20px;
        list-style-type: none;
      }
      ul {
        li {
          padding: 10px 0 10px 10px;
          &:before{
            color: var(--primary);
            content: "● ";
          }
          p{
            display: inline-block;
            margin-top : 0;
            margin-bottom : 0;
            padding: 10px 0 10px 10px;
          }
          ul{
            margin-top : 0;
            margin-bottom : 0;
          }
        }
      }
      ol {
        counter-reset: number 0;
        li {
          padding: 10px 0 10px 10px;
          &:before {
            counter-increment: number 1;
            content: counter(number) ".";
            font-weight: 600;
            color: var(--primary);
            margin-right: 12px;
          }
          p{
            display: inline-block;
            margin-top : 0;
            margin-bottom : 0;
            padding: 10px 0 10px 10px;
          }
          ol{
            margin-top : 0;
            margin-bottom : 0;
          }
        }
      }
      /* ===============================================
      #  table
      =============================================== */
      table {
        border-collapse:  collapse; /* セルの線を重ねる */
        margin:30px auto;
        background:var(--white);
      }
      th,td {
        border: solid 1px var(--secondary);  /* 枠線指定 */
        padding: 10px;      /* 余白指定 */
      }
      /* ===============================================
      #  marker, box
      =============================================== */
      .marker{
        background: linear-gradient(transparent 70%, var(--pink) 70%);
        font-weight: 600;
      }
      .border-box{
        border: 2px solid var(--pink);
        border-radius: 6px;
        padding: 15px 20px 20px 20px;
        margin:  var(--smallMargin);
        font-size: 0.9rem;
        span{
          display: block;
          text-align: center;
          font-weight: 600;
          margin-bottom: 15px;
        }
      }

      .simple-box{
        background-color: var(--primaryPale);
        border-radius: 6px;
        padding: 25px 20px;
        margin: var(--smallMargin);
        font-size: 0.9rem;
      }

      .title-box{
        position: relative;
        border: 1px solid var(--primary);
        border-radius: 6px;
        padding: 25px 30px;
        margin: var(--smallMargin);
        font-size: 0.9rem;
        span {
          position:absolute;
          top: -12px;
          left: 10px;
          padding: 5px 20px;
          background-color: var(--primary);
          border-radius: 4px;
          color: var(--white);
          line-height: 1em;
          font-size: 0.9rem;
        }
      }

      /* ===============================================
      #  img
      =============================================== */
      .gatsby-resp-image-wrapper {
        overflow: hidden;
        box-shadow: rgba(20, 20, 20, 0.1) 1px 1px 20px;
        margin: 20px 0;
        border-radius: 3px;
      }
      .gatsby-highlight {
        margin: 15px 0;
      }
    }
    hr{
      margin-top: var(--smallMargin);
      margin-bottom: var(--smallMargin);
    }
    section {
      padding-bottom: 50px;
      a {
        color: var(--primary);
        font-weight: 600;
        text-decoration: none;
        transition: 0.3s ease;
        padding: 0 2px;
      }
    }
    /* ===============================================
    #  Relatd Post
    =============================================== */
    .related-posts{
      background: var(--background);
      position: relative;
      border: 1px solid var(--secondary);
      padding: 10px;
      margin: 30px auto;
      font-size: 0.9rem;
      span{
        position:absolute;
        top: -12px;
        left: 10px;
        padding: 5px 20px;
        line-height: 1rem;
        background: var(--background);
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--secondary);
      }
    }

    /* ===============================================
    #  Prism
    =============================================== */
    .gatsby-code-title {
      background: #707070;;
      color: #eee;
      padding: 6px 12px;
      font-size: 0.8em;
      line-height: 1;
      font-weight: bold;
      display: table;
      border-radius: 4px;
    }
    pre[class*="language-"] {
      border-radius:4px;
    }
    .gatsby-highlight{
      margin-top:0;
      margin-bottom:30px;
    }
    code[class*="language-"] {
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: auto;
    }
    /* ===============================================
    #  APPREACH
    =============================================== */
    .appreach {
      text-align: left;
      padding: 10px;
      border: 1px solid #7C7C7C;
      overflow: hidden;
    }
    .appreach:after {
      content: "";
      display: block;
      clear: both;
    }
    .appreach p {
      margin: 0;
    }
    .appreach a:after {
      display: none;
    }
    .appreach__icon {
      float: left;
      border-radius: 10%;
      overflow: hidden;
      margin: 0 3% 0 0 !important;
      width: 25% !important;
      height: auto !important;
      max-width: 120px !important;
    }
    .appreach__detail {
      display: inline-block;
      font-size: 20px;
      line-height: 1.5;
      width: 72%;
      max-width: 72%;
    }
    .appreach__detail:after {
      content: "";
      display: block;
      clear: both;
    }
    .appreach__name {
      font-size: 16px;
      line-height: 1.5em !important;
      max-height: 3em;
      overflow: hidden;
    }
    .appreach__info {
      font-size: 12px !important;
    }
    .appreach__developper, .appreach__price {
      margin-right: 0.5em;
    }
    .appreach__posted a {
      margin-left: 0.5em;
    }
    .appreach__links {
      float: left;
      height: 40px;
      margin-top: 8px;
      white-space: nowrap;
    }
    .appreach__aslink img {
      margin-right: 10px;
      height: 40px;
      width: 135px;
    }
    .appreach__gplink img {
      height: 40px;
      width: 134.5px;
    }
    .appreach__star {
      position: relative;
      font-size: 14px !important;
      height: 1.5em;
      width: 5em;
    }
    .appreach__star__base {
      position: absolute;
      color: #737373;
    }
    .appreach__star__evaluate {
      position: absolute;
      color: #ffc107;
      overflow: hidden;
      white-space: nowrap;
    }
    /* ************************************* */
    /* カエレバ、ヨメレバ、トマレバ */
    /* ************************************* */
    .cstmreba {
      width:98%;
      height:auto;
      margin:36px auto;
      font-family:'Lucida Grande','Hiragino Kaku Gothic ProN',Helvetica, Meiryo, sans-serif;
      line-height: 1.5;
      word-wrap: break-word;
      box-sizing: border-box;
      display: block;
    }
    /* WordPressで自動挿入されるPタグの余白を対処 */
    .cstmreba p {
      margin: 0;
      padding: 0;
    }
    .cstmreba a {
      transition: 0.8s ;
      color:#285EFF; /* テキストリンクカラー */
    }
    .cstmreba a:hover {
      color:#FFCA28; /* テキストリンクカラー(マウスオーバー時) */
    }
    .cstmreba .booklink-box,
    .cstmreba .kaerebalink-box,
    .cstmreba .tomarebalink-box {
      width: 100%;
      background-color: #fafafa; /* 全体の背景カラー */
      overflow: hidden;
      border-radius: 0px;
      box-sizing: border-box;
      padding: 12px 8px;
      box-shadow: 0px 2px 5px 0 rgba(0,0,0,.26);
    }
    /* サムネイル画像ボックス */
    .cstmreba .booklink-image,
    .cstmreba .kaerebalink-image,
    .cstmreba .tomarebalink-image {
      width:150px;
      float:left;
      margin:0 14px 0 0;
      text-align: center;
      background: #fff;
    }
    .cstmreba .booklink-image a,
    .cstmreba .kaerebalink-image a,
    .cstmreba .tomarebalink-image a {
      width:100%;
      display:block;
    }
    .cstmreba .booklink-image a img,
    .cstmreba .kaerebalink-image a img,
    .cstmreba .tomarebalink-image a img {
      margin:0 ;
      padding: 0;
      text-align:center;
      background: #fff;
    }
    .cstmreba .booklink-info,.cstmreba .kaerebalink-info,.cstmreba .tomarebalink-info {
      overflow:hidden;
      line-height:170%;
      color: #333;
    }
    /* infoボックス内リンク下線非表示 */
    .cstmreba .booklink-info a,
    .cstmreba .kaerebalink-info a,
    .cstmreba .tomarebalink-info a {
      text-decoration: none;
    }
    /* 作品・商品・ホテル名 リンク */
    .cstmreba .booklink-name>a,
    .cstmreba .kaerebalink-name>a,
    .cstmreba .tomarebalink-name>a {
      border-bottom: 1px solid ;
      font-size:16px;
    }
    /* powered by */
    .cstmreba .booklink-powered-date,
    .cstmreba .kaerebalink-powered-date,
    .cstmreba .tomarebalink-powered-date {
      font-size:10px;
      line-height:150%;
    }
    .cstmreba .booklink-powered-date a,
    .cstmreba .kaerebalink-powered-date a,
    .cstmreba .tomarebalink-powered-date a {
      color:#333;
      border-bottom: none ;
    }
    .cstmreba .booklink-powered-date a:hover,
    .cstmreba .kaerebalink-powered-date a:hover,
    .cstmreba .tomarebalink-powered-date a:hover {
      color:#333;
      border-bottom: 1px solid #333 ;
    }
    /* 著者・住所 */
    .cstmreba .booklink-detail,.cstmreba .kaerebalink-detail,.cstmreba .tomarebalink-address {
      font-size:12px;
    }
    .cstmreba .kaerebalink-link1 div img,.cstmreba .booklink-link2 div img,.cstmreba .tomarebalink-link1 div img {
      display:none !important;
    }
    .cstmreba .kaerebalink-link1, .cstmreba .booklink-link2,.cstmreba .tomarebalink-link1 {
      display: inline-block;
      width: 100%;
      margin-top: 5px;
    }
    .cstmreba .booklink-link2>div,
    .cstmreba .kaerebalink-link1>div,
    .cstmreba .tomarebalink-link1>div {
      float:left;
      width:24%;
      min-width:128px;
      margin:0.5%;
    }
    /***** ボタンデザインここから ******/
    .cstmreba .booklink-link2 a,
    .cstmreba .kaerebalink-link1 a,
    .cstmreba .tomarebalink-link1 a {
      width: 100%;
      display: inline-block;
      text-align: center;
      box-sizing: border-box;
      margin: 1px 0;
      padding:3% 0.5%;
      border-radius: 8px;
      font-size: 13px;
      font-weight: bold;
      line-height: 180%;
      color: #fff;
      box-shadow: 0px 2px 4px 0 rgba(0,0,0,.26);
    }
    /* トマレバ */
    .cstmreba .tomarebalink-link1 .shoplinkrakuten a {background: #76ae25; border: 2px solid #76ae25; }/* 楽天トラベル */
    .cstmreba .tomarebalink-link1 .shoplinkjalan a { background: #ff7a15; border: 2px solid #ff7a15;}/* じゃらん */
    .cstmreba .tomarebalink-link1 .shoplinkjtb a { background: #c81528; border: 2px solid #c81528;}/* JTB */
    .cstmreba .tomarebalink-link1 .shoplinkknt a { background: #0b499d; border: 2px solid #0b499d;}/* KNT */
    .cstmreba .tomarebalink-link1 .shoplinkikyu a { background: #bf9500; border: 2px solid #bf9500;}/* 一休 */
    .cstmreba .tomarebalink-link1 .shoplinkrurubu a { background: #000066; border: 2px solid #000066;}/* るるぶ */
    .cstmreba .tomarebalink-link1 .shoplinkyahoo a { background: #ff0033; border: 2px solid #ff0033;}/* Yahoo!トラベル */
    .cstmreba .tomarebalink-link1 .shoplinkhis a { background: #004bb0; border: 2px solid #004bb0;}/*** HIS ***/
    /* カエレバ */
    .cstmreba .kaerebalink-link1 .shoplinkyahoo a {background:#ff0033; border:2px solid #ff0033; letter-spacing:normal;} /* Yahoo!ショッピング */
    .cstmreba .kaerebalink-link1 .shoplinkbellemaison a { background:#84be24 ; border: 2px solid #84be24;}  /* ベルメゾン */
    .cstmreba .kaerebalink-link1 .shoplinkcecile a { background:#8d124b; border: 2px solid #8d124b;} /* セシール */
    .cstmreba .kaerebalink-link1 .shoplinkwowma a { background:#ea5404; border: 2px solid #ea5404;} /* Wowma */
    .cstmreba .kaerebalink-link1 .shoplinkkakakucom a {background:#314995; border: 2px solid #314995;} /* 価格コム */
    /* ヨメレバ */
    .cstmreba .booklink-link2 .shoplinkkindle a { background:#007dcd; border: 2px solid #007dcd;} /* Kindle */
    .cstmreba .booklink-link2 .shoplinkrakukobo a { background:#bf0000; border: 2px solid #bf0000;} /* 楽天kobo */
    .cstmreba .booklink-link2  .shoplinkbk1 a { background:#0085cd; border: 2px solid #0085cd;} /* honto */
    .cstmreba .booklink-link2 .shoplinkehon a { background:#2a2c6d; border: 2px solid #2a2c6d;} /* ehon */
    .cstmreba .booklink-link2 .shoplinkkino a { background:#003e92; border: 2px solid #003e92;} /* 紀伊國屋書店 */
    .cstmreba .booklink-link2 .shoplinkebj a { background:#f8485e; border: 2px solid #f8485e;} /* ebookjapan */
    .cstmreba .booklink-link2 .shoplinktoshokan a { background:#333333; border: 2px solid #333333;} /* 図書館 */
    /* カエレバ・ヨメレバ共通 */
    .cstmreba .kaerebalink-link1 .shoplinkamazon a,
    .cstmreba .booklink-link2 .shoplinkamazon a {
      background:#FF9901;
      border: 2px solid #ff9901;
    } /* Amazon */
    .cstmreba .kaerebalink-link1 .shoplinkrakuten a,
    .cstmreba .booklink-link2 .shoplinkrakuten a {
      background: #bf0000;
      border: 2px solid #bf0000;
    } /* 楽天 */
    .cstmreba .kaerebalink-link1 .shoplinkseven a,
    .cstmreba .booklink-link2 .shoplinkseven a {
      background:#225496;
      border: 2px solid #225496;
    } /* 7net */
    /****** ボタンカラー ここまで *****/

    /***** ボタンデザイン　マウスオーバー時ここから *****/
    .cstmreba .booklink-link2 a:hover,
    .cstmreba .kaerebalink-link1 a:hover,
    .cstmreba .tomarebalink-link1 a:hover {
      background: #fff;
    }
    /* トマレバ */
    .cstmreba .tomarebalink-link1 .shoplinkrakuten a:hover { color: #76ae25; }/* 楽天トラベル */
    .cstmreba .tomarebalink-link1 .shoplinkjalan a:hover { color: #ff7a15; }/* じゃらん */
    .cstmreba .tomarebalink-link1 .shoplinkjtb a:hover { color: #c81528; }/* JTB */
    .cstmreba .tomarebalink-link1 .shoplinkknt a:hover { color: #0b499d; }/* KNT */
    .cstmreba .tomarebalink-link1 .shoplinkikyu a:hover { color: #bf9500; }/* 一休 */
    .cstmreba .tomarebalink-link1 .shoplinkrurubu a:hover { color: #000066; }/* るるぶ */
    .cstmreba .tomarebalink-link1 .shoplinkyahoo a:hover { color: #ff0033; }/* Yahoo!トラベル */
    .cstmreba .tomarebalink-link1 .shoplinkhis a:hover { color: #004bb0; }/*** HIS ***/
    /* カエレバ */
    .cstmreba .kaerebalink-link1 .shoplinkyahoo a:hover {color:#ff0033;} /* Yahoo!ショッピング */
    .cstmreba .kaerebalink-link1 .shoplinkbellemaison a:hover { color:#84be24 ; } /* ベルメゾン */
    .cstmreba .kaerebalink-link1 .shoplinkcecile a:hover { color:#8d124b; } /* セシール */
    .cstmreba .kaerebalink-link1 .shoplinkwowma a:hover { color:#ea5404; } /* Wowma */
    .cstmreba .kaerebalink-link1 .shoplinkkakakucom a:hover {color:#314995;} /* 価格コム */
    /* ヨメレバ */
    .cstmreba .booklink-link2 .shoplinkkindle a:hover { color:#007dcd;} /* Kindle */
    .cstmreba .booklink-link2 .shoplinkrakukobo a:hover { color:#bf0000; } /* 楽天kobo */
    .cstmreba .booklink-link2 .shoplinkbk1 a:hover { color:#0085cd; } /* honto */
    .cstmreba .booklink-link2 .shoplinkehon a:hover { color:#2a2c6d; } /* ehon */
    .cstmreba .booklink-link2 .shoplinkkino a:hover { color:#003e92; } /* 紀伊國屋書店 */
    .cstmreba .booklink-link2 .shoplinkebj a:hover { color:#f8485e; } /* ebookjapan */
    .cstmreba .booklink-link2 .shoplinktoshokan a:hover { color:#333333; } /* 図書館 */
    /* カエレバ・ヨメレバ共通 */
    .cstmreba .kaerebalink-link1 .shoplinkamazon a:hover,
    .cstmreba .booklink-link2 .shoplinkamazon a:hover {
      color:#FF9901; } /* Amazon */
    .cstmreba .kaerebalink-link1 .shoplinkrakuten a:hover,
    .cstmreba .booklink-link2 .shoplinkrakuten a:hover {
      color: #bf0000; } /* 楽天 */
    .cstmreba .kaerebalink-link1 .shoplinkseven a:hover,
    .cstmreba .booklink-link2 .shoplinkseven a:hover {
      color:#225496;} /* 7net */
    /***** ボタンデザイン　マウスオーバー時ここまで *****/
    .cstmreba .booklink-footer {
      clear:both;
    }

    /*****  解像度768px以下のスタイル *****/
    @media screen and (max-width:768px){
      .cstmreba .booklink-image,
      .cstmreba .kaerebalink-image,
      .cstmreba .tomarebalink-image {
        width:100%;
        float:none;
      }
      .cstmreba .booklink-link2>div,
      .cstmreba .kaerebalink-link1>div,
      .cstmreba .tomarebalink-link1>div {
        width: 32.33%;
        margin: 0.5%;
      }
      .cstmreba .booklink-info,
      .cstmreba .kaerebalink-info,
      .cstmreba .tomarebalink-info {
        text-align:center;
        padding-bottom: 1px;
      }
    }

    /*****  解像度480px以下のスタイル *****/
    @media screen and (max-width:480px){
      .cstmreba .booklink-link2>div,
      .cstmreba .kaerebalink-link1>div,
      .cstmreba .tomarebalink-link1>div {
        width: 49%;
        margin: 0.5%;
      }
    }
  }
  @media screen and (max-width: 780px) {
    .info {
      margin-top: 10px;
      margin-bottom: 60px;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`

export default Wrapper
