#Image Abstraction Layer
This is an image abstraction search API completed for the FCC backened API challenges.

###User Stories
- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

- I can paginate through the responses by adding a ?offset=2 parameter to the URL.

- I can get a list of the most recently submitted search strings.

### Usage Examples
Search for epic memes: /api/imagesearch/epic%20memes
Example response:
{ img_url: "someurl", 
  alt_text: "picture of an epic meme",
  site:"www.imgur.com" 
}

View your recent searches: /api/recent
Example response: 
{ 
  term: "epic memes", 
  when: 2015-12-30T08:39:34.365Z 
}
