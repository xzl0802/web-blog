<template>
<div>
    <div class="side_menu">
        <svg viewBox="0 0 32 32" width="100%" height="100%">
            <path d="M30 18h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2zM30 6.25h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2zM2 25.75h28c1.1 0 2 0.9 2 2s-0.9 2-2 2h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2z"></path>
        </svg>
        <span>menu
        </span>
    </div>
   <div class="side_main"></div> 
</div>
</template>
<script>
export default {
  name:'menuSide' 
}
</script>
<style scoped>
.side_menu{
    position: fixed;
    z-index: 2;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 3px;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    top: 20px;
    left: 20px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    -webkit-transition: left .3s ease;
    transition: left .3s ease;
}
svg {
    fill: currentColor;
    display: inline-block;
    stroke-width: 0;
    stroke: currentColor;
    width: 14px;
    height: 14px;
}
.side_menu spans{
    padding-left: 5px;
}
.side_menu{
    display: none;
}
</style>