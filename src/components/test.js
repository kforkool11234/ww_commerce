import main from "./amazon.jsx";
main().then(product=>{
    console.log(product[10].pname)
})