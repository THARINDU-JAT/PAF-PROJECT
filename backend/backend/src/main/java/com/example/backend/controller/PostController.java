package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Post;
import com.example.backend.service.PostService;

@CrossOrigin
@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    private PostService postService;

   @PostMapping("/add")
   public String add(@RequestBody Post post){
       postService.savePost(post);
       return "New Post is added";
   }

   @GetMapping("/get/{pid}")
   public Post getPostById(@PathVariable int pid) {
       return postService.getPostById(pid);
   }
   
   @GetMapping("/getAll")
   public List<Post> list(){
     return postService.getAllPosts();
      
   }
    
   @DeleteMapping("/delete/{pid}")
   public String delete(@PathVariable int pid){
      postService.deletePost(pid);
      return "Post with ID " + pid + " has been deleted";
   }

    @PutMapping("/update/{pid}")
    public Post update(@PathVariable int pid, @RequestBody Post post){

       return  postService.updatePost(pid, post);
    }


}
