function slugify(title) {
  const words = title.toLowerCase().split(" "); 
  
  let slug = ""; 
  
  for (const x of words) {
    slug += x + "-"; 
  }
  
  return slug.slice(0, -1); 
}

//function slugify (title) {
//  return title.toLowerCase().split(" ").join("-");
//}


// Kontrol testleri
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
