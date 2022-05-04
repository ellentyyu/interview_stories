---
title: Story API Reference
---

<Block>
## 取得 meta 資料

- method: **`GET`**
- path: `http://localhost:3000/meta`

<Example>
<CURL>
```bash
curl -X GET http://localhost:3000/meta
```
</CURL>
</Example>

</Block>

<Block>
## 取得特定 id 的 story 資料

- method: **`GET`**
- path: `http://localhost:3000/story/:id`

<Example>
<CURL>
```bash
curl -X GET http://localhost:3000/story/XgJFuRN
```
</CURL>
</Example>

</Block>

<Block>
## `story` 物件結構

- `id` (string): unique id
- `imageUrl` (string): 背景圖片網址
- `text` (string): story 的文字
- `duration` (int): 自動播放須顯示的時間長度（millisecond）

<Example>
```json
{
  "id": "XgJFuRN",
  "imageUrl": "https://i.imgur.com/XgJFuRN.jpg",
  "text": "Top Things To Do In Ooty",
  "duration": 3000
}
```
</Example>

</Block>
