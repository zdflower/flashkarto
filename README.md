# Flash card app (Super Mojosa Flash Karto)

I am learning about web development and there is a lot to learn. It would be great to know what you think of this little practice project about what I doing wrong (when there is a known better solution), what is missing, etc. Every (non offensive) comment will be really apreciated.

## Description
This is a super simple, very basic flashcard app, made with React (create-react-app).

There is a collection of cards (a few of them, just for testing) in a file called *cards.json*.

Each card has the form

    {
    	front: {
    		title: String,
    		topic: String,
    		concept: String
    	},
    	back: {
    		explanation: String
    	}
    }

From the main (and only) page you can watch every card in sequence from the first to the last, back and forth, front and back.

## Future improvements

- Implement a method for reviewing the cards and varying the order (other than that of the file).
- Try using some kind of grid system for the layout.
- Adding images in the cards.
- Translate the interface to other languages.
- Create a backend with operations for create, update, delete, etc. collections of cards.
- Choose different files of cards.
- Add a view with a list of all the titles of the cards in a collection.
- View the titles of all the cards for a
- Add optional fields in the cards for subtopic, image, example, key words, sources.
- Try other fonts and colors.
- Who knows...

## Resources from wich I learn for this project (thanks to all the people who make them):

- Beau Carnes youtube video [React Basics](https://www.youtube.com/watch?v=QqLkkBKVDyM&list=PLWKjhJtqVAbmoiNlqLJg1gxEjEuKHHcn_&index=45)
- CS50 seminar [Frontend development with React](https://www.youtube.com/embed/3HMtarQAt3A?autoplay=1&rel=0)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [React docs](https://facebook.github.io/react/docs/hello-world.html)
- [React.js for the visual learner](https://medium.com/coding-artist/react-js-for-the-visual-learner-chapter-1-what-is-this-all-about-a0d28cfd33c6) by [Michael Mangialardi](https://medium.com/@michaelmangial1)
- Pure CSS Images, etc. from [Coding Artist](https://medium.com/coding-artist/)
- create-react-app [README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [Free Code Camp](https://freecodecamp.org)
