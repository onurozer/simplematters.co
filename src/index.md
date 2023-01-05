---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

<%= site.metadata.tagline %>

<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
      <%= reading_time(post.content) %> minutes
    </li>
  <% end %>
</ul>
