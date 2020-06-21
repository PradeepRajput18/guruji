import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServersideService {

  constructor(private http:HttpClient) { }


  // product details from data 
  value
  value1
  productdetails(){
    // return [{"id":0,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":150,"originalcost":200,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":1,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":250,"originalcost":300,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":2,"img":"../../assets/badam.webp","name":"Badam","quant":"1kg","rating":4.4,"cost":350,"originalcost":450,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":3,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":450,"originalcost":500,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":4,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":550,"originalcost":600,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":5,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":650,"originalcost":700,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":6,"img":"../../assets/tea.webp","name":"Tea Powder","quant":"1kg","rating":4.3,"cost":750,"originalcost":800,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":7,"img":"../../assets/chilli.webp","name":"Chilli Powder","quant":"1kg","rating":4.3,"cost":900,"originalcost":1000,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // ]

  //   return [{"_id":{"$oid":"5ee0d2b8c110e90ff01bd0c4"},"name":"Chilli America","rating":4,"cost":100,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792312076.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d2b2c110e90ff01bd0c3"},"name":"Chilli America","rating":4,"cost":20,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792306011.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d290c110e90ff01bd0c2"},"name":"Chilli india","rating":5,"cost":1000,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792272252.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d215c110e90ff01bd0c1"},"name":"Chilli india","rating":5,"cost":1000,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792149976.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d204c110e90ff01bd0c0"},"name":"Chilli","rating":3,"cost":200,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792132430.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d1c3c110e90ff01bd0be"},"name":"Badam india","rating":2,"cost":400,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792067169.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d13cc110e90ff01bd0bd"},"name":"Badam","rating":3.5,"cost":400,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591791932917.webp","__v":0},
  //   {"_id":{"$oid":"5ee0d1c3c110e90ff01bd0be"},"name":"Badam india","rating":2,"cost":400,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792067169.webp","__v":0}
  // ]
    this.value=this.http.get<any>("/productdetails")
    console.log(this.value,"value from service");
    return this.http.get<any>("/productdetails") 
  }

  productduplicates(){
    // return [{"id":0,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":150,"originalcost":200,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":1,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":250,"originalcost":300,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":2,"img":"../../assets/badam.webp","name":"Badam","quant":"1kg","rating":4.4,"cost":350,"originalcost":450,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":3,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":450,"originalcost":500,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":4,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":550,"originalcost":600,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":5,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":650,"originalcost":700,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":6,"img":"../../assets/tea.webp","name":"Tea Powder","quant":"1kg","rating":4.3,"cost":750,"originalcost":800,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // {"id":7,"img":"../../assets/chilli.webp","name":"Chilli Powder","quant":"1kg","rating":4.3,"cost":900,"originalcost":1000,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    // ]

    return [{"_id":{"$oid":"5ee0d2b8c110e90ff01bd0c4"},"name":"Chilli America","rating":4,"cost":100,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792312076.webp","__v":0},
    {"_id":{"$oid":"5ee0d2b2c110e90ff01bd0c3"},"name":"Chilli America","rating":4,"cost":20,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792306011.webp","__v":0},
    {"_id":{"$oid":"5ee0d290c110e90ff01bd0c2"},"name":"Chilli india","rating":5,"cost":1000,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792272252.webp","__v":0},
    {"_id":{"$oid":"5ee0d215c110e90ff01bd0c1"},"name":"Chilli india","rating":5,"cost":1000,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792149976.webp","__v":0},
    {"_id":{"$oid":"5ee0d204c110e90ff01bd0c0"},"name":"Chilli","rating":3,"cost":200,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792132430.webp","__v":0},
    {"_id":{"$oid":"5ee0d1c3c110e90ff01bd0be"},"name":"Badam india","rating":2,"cost":400,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792067169.webp","__v":0},
    {"_id":{"$oid":"5ee0d13cc110e90ff01bd0bd"},"name":"Badam","rating":3.5,"cost":400,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591791932917.webp","__v":0},
    {"_id":{"$oid":"5ee0d1c3c110e90ff01bd0be"},"name":"Badam india","rating":2,"cost":400,"original":"50000","offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o","quant":"1kg","path":"/1591792067169.webp","__v":0}
  ]
    // this.value=this.http.get<any>("/productdetails")
    // console.log(this.value,"value from service");
    // return this.http.get<any>("/productdetails") 
  }

  uploadimgaes(image){
    return this.http.post<any>('/uploadimages',image)
  }

  distance(lat1, lon1, lat2, lon2,destiny) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344
      return {distance:dist,name:destiny};
    }
  }
  
}
