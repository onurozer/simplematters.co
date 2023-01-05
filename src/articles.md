---
layout: page
title: Articles
---

<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
      <%= reading_time(post.content) %> minutes
    </li>
  <% end %>
</ul>
