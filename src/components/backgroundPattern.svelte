<div class="pattern">
    <slot></slot>
  </div>

  <style>
    .pattern {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #1a1a1a;
        background-image: radial-gradient(#333333 1px, transparent 1px);
        background-size: 20px 20px;
        z-index: 0;
    }
    
  </style>