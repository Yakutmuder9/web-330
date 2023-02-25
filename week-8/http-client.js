// ============================================
// ; Title:  WhatABook, Part 2
// ; Author: Professor Krasso
// ; Date:   25 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 8 – WhatABook, Part 2!!
// ;===========================================

// Create a class named HttpClient
class HttpClient {
    async get(url, params = '') {
      url = new URL(url);
      url.search = new URLSearchParams(params);
      const res = await fetch(url.toString(), { method: 'GET' });
      return res.json();
    }
  }
  
export default HttpClient;
  