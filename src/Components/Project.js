import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import p1photo from '../images/jsproject.JPEG';
import p2photo from '../images/jsproject2.JPEG';
import p3photo from '../images/jsproject3.JPEG';
import p4photo from '../images/phpa1.JPEG';
import p5photo from '../images/phpa2p1.JPEG';
import p6photo from '../images/phpa2p2.JPEG';
import p7photo from '../images/phpa3p1.JPEG';
import p8photo from '../images/phpa3p2.JPEG';
import p9photo from '../images/phpa4.JPEG';

const projects = [
  {
    id: 1,
    name: 'Fishing Game',
    githubLink: 'https://github.com/jaypatel125/JavaScriptA4',
    description: ' Fisherman, a captivating and interactive game crafted using JavaScript, HTML, and CSS, with a touch of SVG to bring the oceanic scene to life. In this engaging experience, players take on the role of a skilled fisherman on a boat in the vast sea, armed with a fish trap, aiming to catch as many fishes as possible to boost their score.',
    image: p1photo, 
  },
  {
    id: 2,
    name: 'AJAX-powered Content Display',
    githubLink: 'https://github.com/jaypatel125/JavaScriptA5',
    description: 'In this project, I embarked on a dynamic web development assignment simulating real-world processing scenarios where JSON data is retrieved from a server using AJAX requests in conjunction with PHP. The primary objective was to manipulate the Document Object Model (DOM) to transform received JSON strings into meaningful HTML elements.',
    image: p2photo, 
  },
  {
    id: 3,
    name: 'Dynamic Image Gallery',
    githubLink: 'https://github.com/jaypatel125/JavaScriptA3',
    description: 'In this web project, I created a dynamic image gallery where three randomly selected images are displayed on page load, each representing unique themes. Clicking on images triggers engaging transitions, swapping to random images and resetting the automatic refresh timer. The user-friendly interface includes a manual "Randomize" button, an adjustable automatic refresh timer, a countdown clock with color transitions, and a real-time image change counter. Demonstrating proficiency in HTML, CSS, and JavaScript, this project offers an interactive and visually pleasing exploration of diverse image themes.',
    image: p3photo, 
  },
  {
    id: 4,
    name: 'Serial Number Patterns and Pyramid Table',
    githubLink: 'https://github.com/jaypatel125/phpA1',
    description: 'In this dual-part PHP project, the first task involves creating a script that analyzes user-input banknote serial numbers. The script categorizes serial numbers into distinct patterns such as radar notes (palindromes), ladder notes (increasing, decreasing, or a combination), rotator notes (readable upside down), and binary notes (consisting of 0s or 1s). The results, containing matched patterns or declaring the note as "uninteresting serial number," are output as list items. The second task focuses on generating rows and columns for an HTML table with a pyramid-like pattern in the first column and the sum of corresponding numbers in the second. The script, responsive to AJAX requests, creates a function for row generation based on the row number provided, adhering to the specified requirements.',
    image: p4photo, 
  },
  {
    id: 5,
    name: 'Dynamic Data Sorting ',
    githubLink: 'https://github.com/jaypatel125/phpA2',
    description: 'This project involves sorting and displaying data from two sources, "pokemon.txt" and "movies.json" using PHP, based on user-specified parameters. The script efficiently reads and parses the data, offering alphabetical and reverse-alphabetical sorting options for both Pokémon names and movie titles. The output is presented in a JSON format, demonstrating my proficiency in handling different data structures and implementing sorting algorithms.',
    image: p5photo, 
  },
  {
    id: 6,
    name: 'CSV File Sorting Application',
    githubLink: 'https://github.com/jaypatel125/phpA2',
    description: 'This project addresses file handling and CSV data manipulation. This application accepts CSV files through a user-friendly interface, allowing users to upload a file and specify a sorting column. The server-side PHP script processes the uploaded CSV data, sorts it based on the selected column, and returns the result as a JSON-encoded array. This project showcases my ability to handle file uploads, process CSV data, and implement sorting functionalities, emphasizing usability and efficiency in data management. Both projects underscore my commitment to producing original, well-documented, and functional solutions, contributing to my growing expertise in PHP development.',
    image: p6photo, 
  },
  {
    id: 7,
    name: 'Game of NIM',
    githubLink: 'https://github.com/jaypatel125/phpA3',
    description: 'Dive into the captivating world of the classic NIM game with my PHP script, nim.php. This dynamic implementation allows players to engage in strategic moves of removing 1, 2, or 3 stones from a single pile, alternating turns with the PHP script. Boasting flexible parameters like mode, difficulty, count, and player_move, the script provides an immersive gaming experience. Utilizing a smart approach for optimal moves, it calculates the remainder when the stones are divided by 4 and strategically selects the appropriate move. The output, presented in a JSON-encoded array, includes details on the move, remaining stones, player entity, and game progress. Whether you prefer a random guess or an optimal play, this NIM game script ensures an enjoyable and thought-provoking gaming adventure.',
    image: p7photo, 
  },
  {
    id: 8,
    name: 'Game of Hangman',
    githubLink: 'https://github.com/jaypatel125/phpA3',
    description: 'Experience the classic game of Hangman with my PHP script, hangman.php. This single-player adventure unfolds through AJAX GET requests, allowing users to reset the game or make letter guesses. The script responds with a JSON-encoded array, offering insights into previous guesses, available letters, the secret word, incorrect strikes, and game status. Utilizing an unmodified wordlist.txt file, each session presents a new word challenge. Successfully guess the word before accumulating 7 incorrect strikes for a victory, or face defeat with a striking announcement. With its simplicity and entertainment value, this Hangman script promises a delightful gaming journey.',
    image: p8photo, 
  },
  {
    id: 9,
    name: 'Infinite Quotes',
    githubLink: 'https://github.com/jaypatel125/phpA4',
    description: 'Introducing "InfiniteQuotes" - a dynamic web page powered by the quotes.php script. Experience an endless scroll of inspiration with Bootstrap 5 Cards, seamlessly displaying captivating quotations and authors. As users explore, AJAX queries fetch JSON-encoded arrays of beautifully crafted cards, ensuring a responsive design with a minimum of three cards per row. The server-side magic delivers a maximum of 20 quotations at a time, creating an engaging and visually appealing platform for continuous inspiration.',
    image: p9photo, 
  },
  
];

const Project = () => {
  return (
    <div className='page1' style={{ height: 'unset' }}>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3 style={{ marginBottom: '10px' }}>{project.id}. {project.name}</h3>
          <div className="image-container">
            <img src={project.image} alt={`Project ${project.id}`} style={{ maxWidth: 800 }}/>
          </div>
          <p  style={{ marginBottom: '15px' }}>{project.description}</p>
          <a  href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />
            GitHub
          </a>
        </div>
      ))}
      <h3 className='paragraph'>Explore my other projects on&nbsp;
        <a href='https://github.com/jaypatel125' target="_blank">
            GitHub
        </a> 
        &nbsp;to discover a diverse range of applications and technologies.</h3>
    </div>
  );
};



export default Project;
