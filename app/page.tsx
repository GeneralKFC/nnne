import Main from "./Components/Main";
async function fetchdata(){
  const res:any=await fetch('https://jsonplaceholder.typicode.com/posts');
  const result:any= await res.json();
  return result;

}

export default async function Home() {
  const posts:any=await fetchdata();
  return (
    <div> 

      <Main posts={posts}/>
      
    </div>
  
  )
}
