# wc-icon

一个基于svg的图标组件。

## 属性

### source

svg源文件的别名，也就是在`<wc-icon-source>`中定义的_name_属性的值，默认值为`default`。这个属性会定义改图标svg源的命名空间。

?> 点击[**这里**](/zh-cn/icon-source)了解更多关于`<wc-icon-source>`的内容。

### type

在svg源文件中定义的图标的类型名。

### path

svg的path值。

?> 如果设置了`path`值，_source_和_type_属性将会失效。

### view

定义svg的viewBox，默认值为1024。


### issourceloaded

只读属性，用于展示源文件是否已加载。

## 示例

如果已定义了源文件的别名为'default'，并且在svg源文件中存在一个id叫做'smile'的symbol，就可以这样使用：

```html
<wc-icon type="smile"></wc-icon>
```

如果这个smile图标的源文件别名为'faces'：

```html
<wc-icon source="faces" type="smile"></wc-icon>
```

如果使用_path_：

```html
<wc-icon path="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"></wc-icon>
```

<wc-icon path="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"></wc-icon>

## 默认图标库

我在iconfont上选择了[一个官方库](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=33)作为默认图标库。

<style>
  .icons wc-icon {border: 1px solid #dddddd;font-size: 26px;margin: 12px;padding: 45px;position: relative;}
  .icons wc-icon:after {content: attr(type);font-size: 12px;line-height: 15px;width: 100%;height: fit-content;color: #999999;position: absolute;bottom: 5px;left: 0;text-align: center;white-space: pre-wrap;word-break: break-all;}
</style>

<div class="icons">
    <wc-icon type="cartfill"></wc-icon>

    <wc-icon type="camera_light"></wc-icon>

    <wc-icon type="discoverfill"></wc-icon>

    <wc-icon type="hot_light"></wc-icon>

    <wc-icon type="homefill"></wc-icon>

    <wc-icon type="refresh_light"></wc-icon>

    <wc-icon type="message"></wc-icon>

    <wc-icon type="back_light"></wc-icon>

    <wc-icon type="addressbook"></wc-icon>

    <wc-icon type="share_light"></wc-icon>

    <wc-icon type="link"></wc-icon>

    <wc-icon type="comment_light"></wc-icon>

    <wc-icon type="lock"></wc-icon>

    <wc-icon type="unlock"></wc-icon>

    <wc-icon type="favor_light"></wc-icon>

    <wc-icon type="vip"></wc-icon>

    <wc-icon type="weibo"></wc-icon>

    <wc-icon type="comment_fill_light"></wc-icon>

    <wc-icon type="activity"></wc-icon>

    <wc-icon type="wang_light"></wc-icon>

    <wc-icon type="big"></wc-icon>

    <wc-icon type="more_android_light"></wc-icon>

    <wc-icon type="friendaddfill"></wc-icon>

    <wc-icon type="friend_light"></wc-icon>

    <wc-icon type="friendadd"></wc-icon>

    <wc-icon type="more_light"></wc-icon>

    <wc-icon type="friendfamous"></wc-icon>

    <wc-icon type="goods_favor_light"></wc-icon>

    <wc-icon type="friend"></wc-icon>

    <wc-icon type="goods_new_fill_light"></wc-icon>

    <wc-icon type="goods"></wc-icon>

    <wc-icon type="goods_new_light"></wc-icon>

    <wc-icon type="selection"></wc-icon>

    <wc-icon type="goods_light"></wc-icon>

    <wc-icon type="tmall"></wc-icon>

    <wc-icon type="medal_fill_light"></wc-icon>

    <wc-icon type="explore"></wc-icon>

    <wc-icon type="medal_light"></wc-icon>

    <wc-icon type="present"></wc-icon>

    <wc-icon type="news_fill_light"></wc-icon>

    <wc-icon type="squarecheckfill"></wc-icon>

    <wc-icon type="news_hot_fill_light"></wc-icon>

    <wc-icon type="square"></wc-icon>

    <wc-icon type="news_hot_light"></wc-icon>

    <wc-icon type="squarecheck"></wc-icon>

    <wc-icon type="news_light"></wc-icon>

    <wc-icon type="round"></wc-icon>

    <wc-icon type="video_fill_light"></wc-icon>

    <wc-icon type="roundaddfill"></wc-icon>

    <wc-icon type="message_fill_light"></wc-icon>

    <wc-icon type="roundadd"></wc-icon>

    <wc-icon type="form_light"></wc-icon>

    <wc-icon type="add"></wc-icon>

    <wc-icon type="video_light"></wc-icon>

    <wc-icon type="notificationforbidfill"></wc-icon>

    <wc-icon type="search_list_light"></wc-icon>

    <wc-icon type="explorefill"></wc-icon>

    <wc-icon type="form_fill_light"></wc-icon>

    <wc-icon type="fold"></wc-icon>

    <wc-icon type="global_light"></wc-icon>

    <wc-icon type="game"></wc-icon>

    <wc-icon type="global"></wc-icon>

    <wc-icon type="redpacket"></wc-icon>

    <wc-icon type="favor_fill_light"></wc-icon>

    <wc-icon type="selectionfill"></wc-icon>

    <wc-icon type="delete_light"></wc-icon>

    <wc-icon type="similar"></wc-icon>

    <wc-icon type="back_android"></wc-icon>

    <wc-icon type="appreciatefill"></wc-icon>

    <wc-icon type="back_android_light"></wc-icon>

    <wc-icon type="infofill"></wc-icon>

    <wc-icon type="down_light"></wc-icon>

    <wc-icon type="info"></wc-icon>

    <wc-icon type="round_close_light"></wc-icon>

    <wc-icon type="tao"></wc-icon>

    <wc-icon type="round_close_fill_light"></wc-icon>

    <wc-icon type="mobiletao"></wc-icon>

    <wc-icon type="expressman"></wc-icon>

    <wc-icon type="forwardfill"></wc-icon>

    <wc-icon type="punch_light"></wc-icon>

    <wc-icon type="forward"></wc-icon>

    <wc-icon type="evaluate_fill"></wc-icon>

    <wc-icon type="rechargefill"></wc-icon>

    <wc-icon type="furniture"></wc-icon>

    <wc-icon type="recharge"></wc-icon>

    <wc-icon type="dress"></wc-icon>

    <wc-icon type="vipcard"></wc-icon>

    <wc-icon type="coffee"></wc-icon>

    <wc-icon type="voice"></wc-icon>

    <wc-icon type="sports"></wc-icon>

    <wc-icon type="voicefill"></wc-icon>

    <wc-icon type="group_light"></wc-icon>

    <wc-icon type="friendfavor"></wc-icon>

    <wc-icon type="location_light"></wc-icon>

    <wc-icon type="wifi"></wc-icon>

    <wc-icon type="attention_light"></wc-icon>

    <wc-icon type="share"></wc-icon>

    <wc-icon type="group_fill_light"></wc-icon>

    <wc-icon type="wefill"></wc-icon>

    <wc-icon type="group_fill"></wc-icon>

    <wc-icon type="we"></wc-icon>

    <wc-icon type="play_forward_fill"></wc-icon>

    <wc-icon type="lightauto"></wc-icon>

    <wc-icon type="subscription_light"></wc-icon>

    <wc-icon type="lightforbid"></wc-icon>

    <wc-icon type="deliver_fill"></wc-icon>

    <wc-icon type="lightfill"></wc-icon>

    <wc-icon type="notice_forbid_fill"></wc-icon>

    <wc-icon type="camerarotate"></wc-icon>

    <wc-icon type="qr_code_light"></wc-icon>

    <wc-icon type="light"></wc-icon>

    <wc-icon type="settings_light"></wc-icon>

    <wc-icon type="barcode"></wc-icon>

    <wc-icon type="pick"></wc-icon>

    <wc-icon type="flashlightclose"></wc-icon>

    <wc-icon type="form_favor_light"></wc-icon>

    <wc-icon type="flashlightopen"></wc-icon>

    <wc-icon type="round_comment_light"></wc-icon>

    <wc-icon type="searchlist"></wc-icon>

    <wc-icon type="phone_light"></wc-icon>

    <wc-icon type="service"></wc-icon>

    <wc-icon type="round_down_light"></wc-icon>

    <wc-icon type="sort"></wc-icon>

    <wc-icon type="friend_settings_light"></wc-icon>

    <wc-icon type="1212"></wc-icon>

    <wc-icon type="change"></wc-icon>

    <wc-icon type="down"></wc-icon>

    <wc-icon type="round_list_light"></wc-icon>

    <wc-icon type="mobile"></wc-icon>

    <wc-icon type="ticket_fill"></wc-icon>

    <wc-icon type="mobilefill"></wc-icon>

    <wc-icon type="round_friend_fill"></wc-icon>

    <wc-icon type="copy1"></wc-icon>

    <wc-icon type="round_crown_fill"></wc-icon>

    <wc-icon type="countdownfill"></wc-icon>

    <wc-icon type="round_link_fill"></wc-icon>

    <wc-icon type="countdown"></wc-icon>

    <wc-icon type="round_light_fill"></wc-icon>

    <wc-icon type="noticefill"></wc-icon>

    <wc-icon type="round_favor_fill"></wc-icon>

    <wc-icon type="notice"></wc-icon>

    <wc-icon type="round_menu_fill"></wc-icon>

    <wc-icon type="qiang"></wc-icon>

    <wc-icon type="round_location_fill"></wc-icon>

    <wc-icon type="upstagefill"></wc-icon>

    <wc-icon type="round_pay_fill"></wc-icon>

    <wc-icon type="upstage"></wc-icon>

    <wc-icon type="round_like_fill"></wc-icon>

    <wc-icon type="babyfill"></wc-icon>

    <wc-icon type="round_people_fill"></wc-icon>

    <wc-icon type="baby"></wc-icon>

    <wc-icon type="round_pay"></wc-icon>

    <wc-icon type="brandfill"></wc-icon>

    <wc-icon type="round_rank_fill"></wc-icon>

    <wc-icon type="brand"></wc-icon>

    <wc-icon type="round_redpacket_fill"></wc-icon>

    <wc-icon type="choicenessfill"></wc-icon>

    <wc-icon type="round_skin_fill"></wc-icon>

    <wc-icon type="choiceness"></wc-icon>

    <wc-icon type="round_record_fill"></wc-icon>

    <wc-icon type="clothesfill"></wc-icon>

    <wc-icon type="round_ticket_fill"></wc-icon>

    <wc-icon type="clothes"></wc-icon>

    <wc-icon type="round_redpacket"></wc-icon>

    <wc-icon type="creativefill"></wc-icon>

    <wc-icon type="round_text_fill"></wc-icon>

    <wc-icon type="creative"></wc-icon>

    <wc-icon type="round_ticket"></wc-icon>

    <wc-icon type="female"></wc-icon>

    <wc-icon type="round_transfer_fill"></wc-icon>

    <wc-icon type="keyboard"></wc-icon>

    <wc-icon type="subtitle_block_light"></wc-icon>

    <wc-icon type="male"></wc-icon>

    <wc-icon type="warn_light"></wc-icon>

    <wc-icon type="newfill"></wc-icon>

    <wc-icon type="round_transfer"></wc-icon>

    <wc-icon type="new"></wc-icon>

    <wc-icon type="vip_code_light"></wc-icon>

    <wc-icon type="pullleft"></wc-icon>

    <wc-icon type="subtitle_unblock_light"></wc-icon>

    <wc-icon type="pullright"></wc-icon>

    <wc-icon type="round_shop_fill"></wc-icon>

    <wc-icon type="rankfill"></wc-icon>

    <wc-icon type="oppose_fill_light"></wc-icon>

    <wc-icon type="rank"></wc-icon>

    <wc-icon type="oppose_light"></wc-icon>

    <wc-icon type="bad"></wc-icon>

    <wc-icon type="living"></wc-icon>

    <wc-icon type="cameraadd"></wc-icon>

    <wc-icon type="goods_hot_fill"></wc-icon>

    <wc-icon type="focus"></wc-icon>

    <wc-icon type="ticket_money_fill"></wc-icon>

    <wc-icon type="friendfill"></wc-icon>

    <wc-icon type="arrow_left_fill"></wc-icon>

    <wc-icon type="cameraaddfill"></wc-icon>

    <wc-icon type="arrow_up_fill"></wc-icon>

    <wc-icon type="apps"></wc-icon>

    <wc-icon type="xiaoheiqun"></wc-icon>

    <wc-icon type="paintfill"></wc-icon>

    <wc-icon type="auction"></wc-icon>

    <wc-icon type="paint"></wc-icon>

    <wc-icon type="return"></wc-icon>

    <wc-icon type="picfill"></wc-icon>

    <wc-icon type="mall_light"></wc-icon>

    <wc-icon type="refresharrow"></wc-icon>

    <wc-icon type="mall_fill_light"></wc-icon>

    <wc-icon type="markfill"></wc-icon>

    <wc-icon type="broadcast_fill"></wc-icon>

    <wc-icon type="mark"></wc-icon>

    <wc-icon type="at"></wc-icon>

    <wc-icon type="presentfill"></wc-icon>

    <wc-icon type="card_fill"></wc-icon>

    <wc-icon type="repeal"></wc-icon>

    <wc-icon type="album"></wc-icon>

    <wc-icon type="peoplefill"></wc-icon>

    <wc-icon type="people"></wc-icon>

    <wc-icon type="servicefill"></wc-icon>

    <wc-icon type="repair"></wc-icon>

    <wc-icon type="file"></wc-icon>

    <wc-icon type="repairfill"></wc-icon>

    <wc-icon type="taoxiaopu"></wc-icon>

    <wc-icon type="attentionfill"></wc-icon>

    <wc-icon type="attention"></wc-icon>

    <wc-icon type="commandfill"></wc-icon>

    <wc-icon type="command"></wc-icon>

    <wc-icon type="communityfill"></wc-icon>

    <wc-icon type="community"></wc-icon>

    <wc-icon type="read"></wc-icon>

    <wc-icon type="suan"></wc-icon>

    <wc-icon type="hua"></wc-icon>

    <wc-icon type="ju"></wc-icon>

    <wc-icon type="tian"></wc-icon>

    <wc-icon type="calendar"></wc-icon>

    <wc-icon type="cut"></wc-icon>

    <wc-icon type="magic"></wc-icon>

    <wc-icon type="backwardfill"></wc-icon>

    <wc-icon type="playfill"></wc-icon>

    <wc-icon type="stop"></wc-icon>

    <wc-icon type="tagfill"></wc-icon>

    <wc-icon type="tag"></wc-icon>

    <wc-icon type="group"></wc-icon>

    <wc-icon type="all1"></wc-icon>

    <wc-icon type="backdelete"></wc-icon>

    <wc-icon type="hotfill"></wc-icon>

    <wc-icon type="hot"></wc-icon>

    <wc-icon type="post"></wc-icon>

    <wc-icon type="radiobox"></wc-icon>

    <wc-icon type="rounddown"></wc-icon>

    <wc-icon type="upload"></wc-icon>

    <wc-icon type="writefill"></wc-icon>

    <wc-icon type="write"></wc-icon>

    <wc-icon type="radioboxfill"></wc-icon>

    <wc-icon type="punch"></wc-icon>

    <wc-icon type="shake"></wc-icon>

    <wc-icon type="add1"></wc-icon>

    <wc-icon type="move"></wc-icon>

    <wc-icon type="safe"></wc-icon>

    <wc-icon type="haodian"></wc-icon>

    <wc-icon type="mao"></wc-icon>

    <wc-icon type="qi"></wc-icon>

    <wc-icon type="ye"></wc-icon>

    <wc-icon type="juhuasuan"></wc-icon>

    <wc-icon type="taoqianggou"></wc-icon>

    <wc-icon type="tianmao"></wc-icon>

    <wc-icon type="activityfill"></wc-icon>

    <wc-icon type="crownfill"></wc-icon>

    <wc-icon type="crown"></wc-icon>

    <wc-icon type="goodsfill"></wc-icon>

    <wc-icon type="messagefill"></wc-icon>

    <wc-icon type="profilefill"></wc-icon>

    <wc-icon type="sound"></wc-icon>

    <wc-icon type="sponsorfill"></wc-icon>

    <wc-icon type="sponsor"></wc-icon>

    <wc-icon type="upblock"></wc-icon>

    <wc-icon type="weblock"></wc-icon>

    <wc-icon type="weunblock"></wc-icon>

    <wc-icon type="1111"></wc-icon>

    <wc-icon type="my"></wc-icon>

    <wc-icon type="myfill"></wc-icon>

    <wc-icon type="emojifill"></wc-icon>

    <wc-icon type="emojiflashfill"></wc-icon>

    <wc-icon type="flashbuyfill-copy"></wc-icon>

    <wc-icon type="text"></wc-icon>

    <wc-icon type="goodsfavor"></wc-icon>

    <wc-icon type="musicfill"></wc-icon>

    <wc-icon type="musicforbidfill"></wc-icon>

    <wc-icon type="xiamiforbid"></wc-icon>

    <wc-icon type="xiami"></wc-icon>

    <wc-icon type="roundleftfill"></wc-icon>

    <wc-icon type="triangledownfill"></wc-icon>

    <wc-icon type="appreciate"></wc-icon>

    <wc-icon type="triangleupfill"></wc-icon>

    <wc-icon type="roundleftfill-copy"></wc-icon>

    <wc-icon type="pulldown1"></wc-icon>

    <wc-icon type="emojilight"></wc-icon>

    <wc-icon type="keyboardlight"></wc-icon>

    <wc-icon type="recordfill"></wc-icon>

    <wc-icon type="recordlight"></wc-icon>

    <wc-icon type="record"></wc-icon>

    <wc-icon type="roundaddlight"></wc-icon>

    <wc-icon type="soundlight"></wc-icon>

    <wc-icon type="cardboardfill"></wc-icon>

    <wc-icon type="cardboard"></wc-icon>

    <wc-icon type="formfill"></wc-icon>

    <wc-icon type="coin"></wc-icon>

    <wc-icon type="sortlight"></wc-icon>

    <wc-icon type="cardboardforbid"></wc-icon>

    <wc-icon type="circlefill"></wc-icon>

    <wc-icon type="circle"></wc-icon>

    <wc-icon type="taxi"></wc-icon>

    <wc-icon type="attentionforbid"></wc-icon>

    <wc-icon type="timefill"></wc-icon>

    <wc-icon type="attentionforbidfill"></wc-icon>

    <wc-icon type="time"></wc-icon>

    <wc-icon type="attentionfavorfill"></wc-icon>

    <wc-icon type="unfold"></wc-icon>

    <wc-icon type="attentionfavor"></wc-icon>

    <wc-icon type="warnfill"></wc-icon>

    <wc-icon type="piclight"></wc-icon>

    <wc-icon type="warn"></wc-icon>

    <wc-icon type="shoplight"></wc-icon>

    <wc-icon type="camerafill"></wc-icon>

    <wc-icon type="voicelight"></wc-icon>

    <wc-icon type="camera"></wc-icon>

    <wc-icon type="attentionfavorfill-copy"></wc-icon>

    <wc-icon type="commentfill"></wc-icon>

    <wc-icon type="full"></wc-icon>

    <wc-icon type="comment"></wc-icon>

    <wc-icon type="mail"></wc-icon>

    <wc-icon type="likefill"></wc-icon>

    <wc-icon type="peoplelist"></wc-icon>

    <wc-icon type="like"></wc-icon>

    <wc-icon type="goodsnewfill"></wc-icon>

    <wc-icon type="notificationfill"></wc-icon>

    <wc-icon type="goodsnew"></wc-icon>

    <wc-icon type="notification"></wc-icon>

    <wc-icon type="medalfill"></wc-icon>

    <wc-icon type="order"></wc-icon>

    <wc-icon type="medal"></wc-icon>

    <wc-icon type="samefill"></wc-icon>

    <wc-icon type="newsfill"></wc-icon>

    <wc-icon type="same"></wc-icon>

    <wc-icon type="newshotfill"></wc-icon>

    <wc-icon type="deliver"></wc-icon>

    <wc-icon type="newshot"></wc-icon>

    <wc-icon type="evaluate"></wc-icon>

    <wc-icon type="news"></wc-icon>

    <wc-icon type="pay"></wc-icon>

    <wc-icon type="videofill"></wc-icon>

    <wc-icon type="send"></wc-icon>

    <wc-icon type="video"></wc-icon>

    <wc-icon type="shop"></wc-icon>

    <wc-icon type="askfill"></wc-icon>

    <wc-icon type="ticket"></wc-icon>

    <wc-icon type="ask"></wc-icon>

    <wc-icon type="wang"></wc-icon>

    <wc-icon type="exit"></wc-icon>

    <wc-icon type="back"></wc-icon>

    <wc-icon type="skinfill"></wc-icon>

    <wc-icon type="cascades"></wc-icon>

    <wc-icon type="skin"></wc-icon>

    <wc-icon type="discover"></wc-icon>

    <wc-icon type="moneybagfill"></wc-icon>

    <wc-icon type="list"></wc-icon>

    <wc-icon type="usefullfill"></wc-icon>

    <wc-icon type="more"></wc-icon>

    <wc-icon type="usefull"></wc-icon>

    <wc-icon type="scan"></wc-icon>

    <wc-icon type="moneybag"></wc-icon>

    <wc-icon type="settings"></wc-icon>

    <wc-icon type="redpacket_fill"></wc-icon>

    <wc-icon type="questionfill"></wc-icon>

    <wc-icon type="subscription"></wc-icon>

    <wc-icon type="question"></wc-icon>

    <wc-icon type="home_light"></wc-icon>

    <wc-icon type="shopfill"></wc-icon>

    <wc-icon type="my_light"></wc-icon>

    <wc-icon type="form"></wc-icon>

    <wc-icon type="community_light"></wc-icon>

    <wc-icon type="wangfill"></wc-icon>

    <wc-icon type="cart_light"></wc-icon>

    <wc-icon type="pic1"></wc-icon>

    <wc-icon type="we_light"></wc-icon>

    <wc-icon type="filter"></wc-icon>

    <wc-icon type="home_fill_light"></wc-icon>

    <wc-icon type="footprint"></wc-icon>

    <wc-icon type="cart_fill_light"></wc-icon>

    <wc-icon type="top"></wc-icon>

    <wc-icon type="community_fill_light"></wc-icon>

    <wc-icon type="pulldown"></wc-icon>

    <wc-icon type="my_fill_light"></wc-icon>

    <wc-icon type="pullup"></wc-icon>

    <wc-icon type="we_fill_light"></wc-icon>

    <wc-icon type="right"></wc-icon>

    <wc-icon type="skin_light"></wc-icon>

    <wc-icon type="refresh"></wc-icon>

    <wc-icon type="search_light"></wc-icon>

    <wc-icon type="moreandroid"></wc-icon>

    <wc-icon type="scan_light"></wc-icon>

    <wc-icon type="deletefill"></wc-icon>

    <wc-icon type="people_list_light"></wc-icon>

    <wc-icon type="refund"></wc-icon>

    <wc-icon type="message_light"></wc-icon>

    <wc-icon type="cart"></wc-icon>

    <wc-icon type="close_light"></wc-icon>

    <wc-icon type="qrcode"></wc-icon>

    <wc-icon type="add_light"></wc-icon>

    <wc-icon type="remind"></wc-icon>

    <wc-icon type="profile_light"></wc-icon>

    <wc-icon type="delete"></wc-icon>

    <wc-icon type="service_light"></wc-icon>

    <wc-icon type="profile"></wc-icon>

    <wc-icon type="friend_add_light"></wc-icon>

    <wc-icon type="home"></wc-icon>

    <wc-icon type="edit_light"></wc-icon>

    <wc-icon type="component"></wc-icon>

    <wc-icon type="code"></wc-icon>

    <wc-icon type="copy"></wc-icon>

    <wc-icon type="dollar"></wc-icon>

    <wc-icon type="history"></wc-icon>

    <wc-icon type="editor"></wc-icon>

    <wc-icon type="data"></wc-icon>

    <wc-icon type="gift"></wc-icon>

    <wc-icon type="integral"></wc-icon>

    <wc-icon type="nav-list"></wc-icon>

    <wc-icon type="pic"></wc-icon>

    <wc-icon type="Notvisible"></wc-icon>

    <wc-icon type="play"></wc-icon>

    <wc-icon type="rising"></wc-icon>

    <wc-icon type="QRcode"></wc-icon>

    <wc-icon type="auto"></wc-icon>

    <wc-icon type="all"></wc-icon>

    <wc-icon type="bussiness-man"></wc-icon>

  </div>