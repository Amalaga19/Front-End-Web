var client = contentful.createClient({
    space: 'mxzy1eyelnad',
    accessToken: 'uheI-3MmRz84tApOt3S8TDiVksHvFJTEVBgy-XamERc',
  });
  
  client.getEntries().then(entries => {
    // log the title for all the entries that have it
    entries.items.forEach(entry => {
      console.log(entry);
      
    });
  });

  console.log(entry);
    let title = document.createElement('h1');
    title.textContent = entry.fields.title;
    title.classList.add('blog-title');
    blog.append(title);

    let image = document.createElement('img');
    image.src = entry.fields.image.fields.file.url;
    image.classList.add('blog-image');
    blog.append(image);

    // render the body text
    let content = document.createElement('p');
    content.textContent = entry.fields.body;
    blog.append(content);

    
  



