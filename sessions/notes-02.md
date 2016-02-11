# 02: Session Notes #
##### Date: 10-02-2015 09:00-10:00 #####
-------------------------------------------------


## Questions: ##

1. Border radius: Right angled corners, corners only - how to do it with CSS?  Is there a simpler way than using images? 
Answer: Use container div and for inner divs. Position absolute the child divs relative to the container.
2. When styling lists E.g. changing colour of all text is it more profressional to use a div to set the css style or use a class in every li element?
Answer: Use ul.main-list>li{ color:red;}
3. Which is more correct in page layout: using display or float with positioning? 
Answer: Float when not using flexbox.

```html
   <table>
       <tr>
           <td>
              Cell1
           </td>
           <td>
             Cell2
           </td>
           <td>
             Cell3
           </td>
       </tr>
   </table>
   
   <div class="my-row">
     <div>
     Cell1
     </div>
     <div>
     Cell2
     </div>
     <div>
     Cell3
     </div>
   </div>
```

```css
   div.my-row{
     width:100%;
   }
   div.my-row>div{
      width: 100px;
      float: left;
   }
```

```
   width>300px
   Cell1 Cell2 Cell3
   
   width<300px 250px
   Cell1 Cell2
   Cell3
   
   width<300px 150px
   Cell1
   Cell2
   Cell3
```
   



## Notes: ##
See answers above.

### Topics here... ###

Specific notes underneath each topic...




## Things to do for next session: ##
1. Things here...



