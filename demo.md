---
marp: true
theme: academic
paginate: true
math: katex
---

<!-- _class: lead -->

# MarpによるAI-friendlyなスライド

<br>

_Your NAME (YYYY/MM/DD)_

---

<!-- _header: 見出し -->

## 青色の縦棒付き見出し（h2）
このように`h2` を使うと見出しの左端に青色の縦棒が表示されます。

### より小さな見出し（h3）

- 箇条書きなどの通常の要素と組み合わせてもよい
- `h2` か `h3` を使う

---

<!-- _header: 数式 -->

数式は4行までしか入らない。左右分割はしない方がよい。

$$
\begin{array}{c}{{\displaystyle{\mathrm{NLL}}(\mu,\sigma^{2})\\
=-\sum_{n=1}^{N}\log\left[\left(\frac{1}{2\pi\sigma^{2}}\right)^{\frac{1}{2}}\exp\left(-\frac{1}{2\sigma^{2}}(y_{n}-\mu)^{2}\right)\right]}} \\
{{\displaystyle{=\frac{1}{2\sigma^{2}}\sum_{n=1}^{N}(y_{n}-\mu)^{2}+\frac{N}{2}\log(2\pi\sigma^{2})}}}
\end{array}
$$

インライン数式 $\mathbb{E}[x] = \int_{-\infty}^{\infty} x f(x) dx$ も使える。

> 1: 脚注は小さい文字で下に表示される

---

<!-- _header: 図とキャプション -->
<div class="fig-group">
  <div class="fig-row">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
  </div>
  <p class="fig-caption">ここには図から読み取れるメッセージを書く。</p>
</div>

> 図のその他の細かい説明（どのように作ったか、縦軸、横軸は何か等）は脚注に書く。図は基本的にhtmlで書いたほうがよい。imgタグを使う。説明が長くなる場合は `<split-style>` を使う。

---

<!-- _header: 2つの図とキャプション `<two-figures-style>` -->

<div class="fig-group">
  <div class="fig-row">
    <img src="./images/kenkyu_woman_seikou.png" width="400">
    <img src="./images/kenkyu_woman_seikou.png" width="400">
  </div>
  <p class="fig-caption">ここには図から読み取れるメッセージを書く。</p>
</div>

---

<!-- _header: 3つの図を横に並べる `<three-figures-style>` -->

<div class="fig-group">
  <div class="fig-row">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
  </div>
  <p class="fig-caption">ここには図から読み取れるメッセージを書く。</p>
</div>

---

<!-- _header: 左右レイアウト (30:65%) `<split-style>` -->

<div class="grid split-30-65">
<div>

<img src="./images/kenkyu_woman_seikou.png" width="400">

</div>
<div>

## コンテンツ

- 画像は左側30%の領域に配置
- テキストは右側65%の領域に配置
- 画像は自動的に垂直方向中央揃え
- 箇条書きなどの通常のMarkdown記法が使用可能
  - ネストされた項目
  - <span class="r">強調</span> や _<span class="b">イタリック</span>_ も使える

</div>
</div>

---

<!-- _header: 左右レイアウト (40:55%) `<split-style>` -->

<div class="grid split-40-55">
<div>

<img src="./images/kenkyu_woman_seikou.png" width="400">

</div>
<div>

### 実装例

```py
import torch
print(torch.cuda.is_available())

def hello():
    print("Hello, World!")

if __name__ == "__main__":
    hello()
```

</div>
</div>

---

<!-- _header: 左右分割を重ねる例  `<split-style>` x2 -->

<div class="grid split-30-65 h300">
  <div><img src="./images/kenkyu_woman_seikou.png" height="250"></div>
  <div>

## 高さを変更可能
以下のクラスで高さを変更可能：`h300`, `h400`, `h500`

  </div>
</div>
<div class="grid split-30-65 h300">
  <div><img src="./images/kenkyu_woman_seikou.png" height="250"></div>
  <div>

## 一貫性のあるレイアウト
このレイアウトは、図表と説明文を組み合わせた場合に特に効果的です。高さが固定されているため、**スライド間の一貫性が保たれます。**

  </div>
</div>

---

<!-- _header: 中央ボックス -->

<div class="blue-box centered-full">

_"The biggest lesson that can be read from 70 years of AI research is that general methods that **leverage computation** are ultimately the most effective, and by a large margin."_ — R. Sutton [2019], "The Bitter Lesson."

</div>

> http://www.incompleteideas.net/IncIdeas/BitterLesson.html

---

<!-- _header: 定理ボックス -->

<div class="blue-box">

<span class="b">定理 1</span> (Fundamental blue)
任意の正の実数 $x$ について、次が成り立つ：

$$
e^x \geq x + 1
$$

</div>

証明：

$$
e^x \geq x + 1
$$
  

---

<!-- _header: 定理ボックス　（左右分割） -->

<div class="grid split-45-50">
<div>
<div class="blue-box">

<span class="b">補題</span> $f(x)$ が区間 $[a,b]$ で連続ならば、
$$
\int_a^b f(x)dx
$$
が存在する。

</div>
</div>
<div>

- 定理ボックスは左右分割レイアウトと組み合わせ可能
- 証明のステップや補足説明を右側に配置できる

<div class="blue-box center">

<span class="b">結論: 数式との相性も良好</span> 

</div>


</div>
</div>
