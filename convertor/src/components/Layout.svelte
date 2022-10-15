<script>
  let inputChar = "";
  $: convertedChar = inputChar;
  const show = ()=>{
    eel.to_hexa(inputChar)((c) =>{
      c = c || ""
      convertedChar = c
    })
  }
 
</script>

<div class="container">
  <nav class="navbar is-light-dark">
    {convertedChar}
  </nav>
  <div class="sidebar is-dark">
    <ul>
      <li class="side-content">
        <div>
          <span>String to Hexadecimal</span>
        </div>
      </li></ul
    >
  </div>
  <div class="main-content is-light">
    <input id="input" bind:value={inputChar} on:input={show} type="text" placeholder="type a string" />
  </div>
</div>

<style>
  :root {
    --dark: #303179;
    --darker: #141850;
    --light: #ed7966;
    --lighter: #f5cac2;
    --toolight: #fae5df;
  }

  .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr minmax(150px,6fr);
    grid-template-rows: minmax(150px, auto) 4fr;
    height: 97%;
    margin-top: 10px;
    grid-template-areas:
      "sidebar navbar"
      "sidebar maincontent";
  }
  .navbar {
    grid-area: navbar;
    font-size: 20px;
    text-align: center;
    word-wrap: break-word;
  }
  .sidebar {
    grid-area: sidebar;
    border-radius: 10px;
    border-left: 10px solid var(--light);
    transition: 0.5s;
  }

  .side-content {
    background-color: var(--dark);
    border-radius: 2px;
    cursor: pointer;
    list-style-type: none;
    height: 50px;
    margin-bottom: 10px;
  }

  .side-content :hover {
    background-color: var(--dark);
    color: rgb(190, 170, 206);
  }

  .side-content div {
    text-align: center;
    text-decoration: none;
    color: white;
    display: block;
    width: 100%;
    height: 100%;
  }

  .side-content a span {
    font-size: 16px;
  }
  .main-content {
    grid-area: maincontent;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  .main-content input {
    border-radius: 4px;
    width: 65%;
    height:60px;
    margin-top: 20px;
    font-size: 35px;
    line-height: 35px;
    text-align: center;
    background: transparent;
    border: 0;
    border-bottom: 5px solid var(--dark);
  }

  input:focus {
    outline: 0;
    color: var(--darker);
  }
  input::placeholder {
    color: var(--light);
  }

  .is-dark {
    background-color: var(--darker);
    color: aliceblue;
  }

  .is-light {
    background-color: var(--lighter);
    color: black;
  }
  .is-light-dark {
    background-color: var(--lighter);
    color: black;
  }
</style>
