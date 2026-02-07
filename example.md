---
marp: true
theme: ai_friendly
paginate: true
math: katex
---

# AI Friendly Theme

<div class="author">Your Name (2025/01/01)</div>

---

## h3の利用例: 機械学習の主な種類

### 1. **教師あり学習** (Supervised Learning)
   - 入力から出力への関数を学習
   - 例：分類、回帰

### 2. **教師なし学習** (Unsupervised Learning)
   - データの構造・パターンを発見
   - 例：クラスタリング、次元削減

### 3. **強化学習** (Reinforcement Learning)
   - 環境との相互作用から報酬を最大化する方策を学習
   - 例：ロボット制御、ゲームAI

---

## 定義の例: 教師あり学習

> **教師あり学習**: 入力 ${\pmb x}\in\mathcal{X}$ から出力 $\pmb{y}\in\mathcal{Y}$ への関数 $f$ を学習するタスク

- 入力 $\pmb{x}$ は特徴量(features)または予測変数とも呼ばれる
- 出力 $\pmb{y}$ はラベル、ターゲット、または応答とも呼ばれる
- 経験 $E$ は入力-出力ペアの集合 $\mathcal{D}=\{(\pmb{x}_{n},\pmb{y}_{n})\}_{n=1}^{N}$

---

## 引用の例: ノーフリーランチ定理

> *すべてのモデルは間違っているが、いくつかのモデルは有用である。* — ジョージ・ボックス

<div class="important ">

あらゆる種類の問題に対して最適に機能する単一の最良モデルは存在しません

</div>

### 適切なモデルの選び方
1. ドメイン知識に基づく
2. 交差検証やベイズ法などのモデル選択技術を使用

---

## 数式・h3の利用例

教師あり学習の目標は、任意の入力に対してラベルを確実に予測するモデルを自動的に作成すること

### 一般的な損失関数

$$
\mathcal{L}(\pmb{\theta})=\frac{1}{N}\sum_{n=1}^{N}\ell(y_{n},f(\pmb{x}_{n};\pmb{\theta}))
$$

### モデルトレーニングの目標: **経験的リスク最小化**

$$
\hat{\pmb\theta}=\underset{\pmb\theta}{\operatorname{argmin}}\mathcal L(\pmb\theta)
$$

---


## `important` の利用例: 相互相関

### 畳み込みと似た操作で、重みベクトルを反転させない

$$
[{\pmb w}*{\pmb x}](i)=w_{-L}x_{i-L}+\cdot\cdot\cdot+w_{-1}x_{i-1}+w_{0}x_{i}+w_{1}x_{i+1}+\cdot\cdot\cdot+w_{L}x_{i+L}
$$

簡略化すると（負のインデックスを排除）:

$$
[{\pmb w}\circledast{\pmb x}](i)=\sum_{u=0}^{L-1}w_{u}x_{i+u}
$$

<div class="important center">

ディープラーニングの文献では通常、**畳み込み**は**相互相関**を意味します

</div>

---

## 画像配置の例 `center`

<div class="figure-wrapper center">

![](images/ef6ff5b23265f052edd37ac235bd4e703501e287f92bbdf2ef48b995682b37cf.jpg)

**図14.31**: マルチタスク密予測問題の図解。[EF15]の図1より。Rob Fergus氏の許可を得て使用。

</div>


---

## 画像配置の例（ テキストががある `center` の場合 `withtext` ）

> <span class="b">分類問題</span>: 出力空間はクラスの集合 $\mathcal{Y}=\{1,2,...,C\}$

- クラス = 順序付けられていない相互排他的なラベル
- 二項分類: $C = 2$、$y \in \{0,1\}$ または $\{-1,+1\}$
- 多クラス分類: $C > 2$

<div class="figure-wrapper center withtext">

![h:180px](images/52978b96dd928aff6ed0bef9aed961083a8e376e2e72369c194abdbd7cbad9c3.jpg)

**図1.2**: アヤメの花の3種類（Setosa、Versicolor、Virginica）

</div>

---

## 画像配置の例 `right`

<div class="figure-wrapper right">
  
![](images/e2f7bfb8494f1360766f6b803d0cd97df2911e55080181be35c1a1e1c4c2bfd9.jpg)
  
**図14.12**: $2\times2$ フィルターとストライド1を使用したマックスプーリングの図解

</div>

### マックスプーリング
- 各領域内の最大値を出力
- エッジや特徴の存在を強調

### 平均プーリング
- 各領域内の平均値を出力
- 全体的な特徴を捉える傾向


---

## コードブロックの例

```python
import numpy as np

def softmax(x):
    return np.exp(x) / np.sum(np.exp(x), axis=0)

x = np.array([1, 2, 3])
print(softmax(x))
```

インラインコードブロック `code` は背景が薄い青にになります

---


## テーブルの例

> **Table** の例です


| 列1 | 列2 | 列3 |
|:-----:|:-----:|:-----:|
| A1 | B1 | description of A1 and B1 |
| A2 | B2 | description of A2 and B2  |
| A3 | B3 | description of A3 and B3  |
| A4 | B4 | description of A4 and B4  |
| A5 | B5 | description of A5 and B5  |

---

## Important Colors

<div class="important">

normal

</div>

<div class="important red">

🚨 red

</div>


<div class="important warning">

⚠️ warning

</div>

<div class="important success">

✅ success

</div>

---

<!-- _class: img-right -->
## `img-right` テンプレート

### 画像を右に配置
- `<!-- _class: img-right -->` だけで画像が右側に配置されます
- テキストは左側に自動配置
- HTMLラッパー不要

### 使い方
- Markdownの画像記法をそのまま使用
- 画像は自動的に右列に配置

![](images/e2f7bfb8494f1360766f6b803d0cd97df2911e55080181be35c1a1e1c4c2bfd9.jpg)

---

<!-- _class: img-left -->
## `img-left` テンプレート

### 画像を左に配置
- `<!-- _class: img-left -->` で画像が左側に配置されます
- テキストは右側に自動配置

### 使い方
- `img-right` の鏡像レイアウト
- 同じMarkdown記法で利用可能

![](images/ef6ff5b23265f052edd37ac235bd4e703501e287f92bbdf2ef48b995682b37cf.jpg)

---

<!-- _class: cols -->
## `cols` テンプレート — 2カラムレイアウト

### 左カラム
- 教師あり学習
- 入力から出力への関数を学習
- 例：分類、回帰

### 右カラム
- 教師なし学習
- データの構造・パターンを発見
- 例：クラスタリング、次元削減

---

<!-- _class: cols-3 -->
## `cols-3` テンプレート — 3カラムレイアウト

### 精度
- Accuracy: 98.5%
- Precision: 97.2%

### 速度
- 推論: 10ms
- 学習: 2時間

### コスト
- GPU: $0.50/h
- ストレージ: 100GB

---

<!-- _class: section-header -->
## 第2章: レイアウトテンプレート

---

<!-- _class: compare -->
## `compare` テンプレート — 比較レイアウト

### 手法A: ランダムフォレスト
- 高速な学習
- 実装が簡単
- 解釈が容易
- 過学習に強い

### 手法B: ニューラルネットワーク
- 高精度
- スケーラブル
- 非線形関係を捉える
- 大量データに適する

---

<!-- _class: steps -->
## `steps` テンプレート — プロセス表示

### 1. 収集
データソースから取得

### 2. 前処理
クリーニング・正規化

### 3. 学習
モデルの訓練と評価

---

<!-- _class: stats -->
## `stats` テンプレート — KPI表示

### 99.9%
可用性

### 10M+
月間ユーザー

### <50ms
レスポンスタイム

---

<!-- _class: timeline -->
## `timeline` テンプレート — 時系列表示

### 2024 Q1
プロジェクト開始・要件定義

### 2024 Q2
プロトタイプ開発・ベータリリース

### 2024 Q3
正式公開・ユーザーフィードバック収集

### 2024 Q4
改善・スケーリング対応

---

<!-- _class: cta -->
## ご清聴ありがとうございました

お問い合わせはこちらまで

### Contact
email@example.com

---

<!-- _class: cols dense -->
## `dense` 修飾クラス — 密度を上げる

### 機械学習
- 教師あり学習
- 教師なし学習
- 強化学習
- 半教師あり学習
- 自己教師あり学習

### 深層学習
- CNN (畳み込みニューラルネットワーク)
- RNN (再帰型ニューラルネットワーク)
- Transformer
- GAN (敵対的生成ネットワーク)
- VAE (変分オートエンコーダ)

---

<!-- _class: relaxed -->
## `relaxed` 修飾クラス — ゆったり表示

### 重要なポイント
- フォントサイズが大きくなります
- 行間・余白が広がります
- 少ないコンテンツを強調したい場合に最適

