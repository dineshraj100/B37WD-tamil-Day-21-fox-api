async function foo() {
  try {
    let res = await fetch('https://randomfox.ca/floof/');
    let res1 = await res.json();
    console.log(res1);

    var ele = document.getElementById('img');
    ele.innerHTML = `<div class="card" ">
    <img src="${res1.image}" class="card-img-top" alt="...">
    <div class="card-body">
    </div>
  </div>`;
  } catch (error) {
    console.log(error);
  }
}
foo();
