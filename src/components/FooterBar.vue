<template>
    <div class="footer">
        <hr />
        <span>Copyright &copy; 2023 Boring_jam_</span>

    </div>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>

<style>
.FooterBar>.footer {
    font-family: "NanumBarunPen";
    text-align: center;
    padding: 20px 0;
}

.FooterBar>.footer>hr {
    height: 1px;
    background: #bbb;
    background-image: -webkit-linear-gradient(left, #eee, #777, #eee);
    background-image: -moz-linear-gradient(left, #eee, #777, #eee);
    background-image: -ms-linear-gradient(left, #eee, #777, #eee);
    background-image: -o-linear-gradient(left, #eee, #777, #eee);
}

.FooterBar>.footer>span {
    margin: 15px 0;
}
</style>