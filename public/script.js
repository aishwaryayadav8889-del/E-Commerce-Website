let count = 0;

function addToCart(product){

    const li=document.createElement("li");

    li.textContent=product+" ";

    const remove=document.createElement("button");

    remove.textContent="Remove";

    remove.onclick=function(){

        li.remove();

        count--;

        document.getElementById("count").textContent=count;

    };

    li.appendChild(remove);

    document.getElementById("cart").appendChild(li);

    count++;

    document.getElementById("count").textContent=count;

}