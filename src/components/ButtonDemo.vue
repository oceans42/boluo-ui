<template>
  <div>
    Button 示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button>button</Button>
    <!-- <Button theme="button">你好</Button> -->
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">big</Button>
    <Button>normal</Button>
    <Button size="small">small</Button>
  </div>
  <div>
    <Button theme="link"
            size="big">big</Button>
    <Button theme="link">normal</Button>
    <Button size="small"
            theme="link">small</Button>
  </div>
  <div>
    <Button size="big"
            theme="text">big</Button>
    <Button theme="text">normal</Button>
    <Button size="small"
            theme="text">small</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link"
              level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link"
              level="danger">危险链接按钮</Button>
    </dir>
    <dir>
      <Button theme="text"
              level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text"
              level="danger">危险文字按钮</Button>
    </dir>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link"
            disabled>禁用链接按钮</Button>
    <Button theme="text"
            disabled>禁用按钮</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
  <h1>示例6 渐变</h1>
  <div>
    <ButtonPro>Gradient</Button>
  </div>
  <br>
  <br>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import ButtonPro from "../lib/ButtonPro.vue";
export default {
  components: { Button, ButtonPro },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>