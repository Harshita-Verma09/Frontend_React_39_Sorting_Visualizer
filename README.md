# Sorting Visualizer

This project is a simple web application that visualizes the Bubble Sort and Selection Sort algorithms. It allows you to generate a random array of numbers and then watch as these algorithms sort the array step by step.

## Features

- **Generate New Array:** Creates a new array of random numbers to be sorted.
- **Bubble Sort Visualization:** Animates the Bubble Sort algorithm, showing how elements are compared and swapped.
- **Selection Sort Visualization:** Animates the Selection Sort algorithm, highlighting the minimum element being selected and moved.
- **Clear and Intuitive Interface:** Uses colored bars to represent the numbers, with the height of each bar corresponding to the value.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd sorting-visualizer
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
5.  Open your browser and navigate to `http://localhost:3000` to see the visualizer.

## How to Use

1.  **Generate an array:** Click the "Generate New Array" button to create a new set of random numbers.
2.  **Visualize Bubble Sort:** Click the "Bubble Sort" button to see the Bubble Sort algorithm in action. The bars will move and change as the array is sorted.
3.  **Visualize Selection Sort:** Click the "Selection Sort" button to observe the Selection Sort algorithm. You'll see the algorithm identify the minimum element and place it in the correct position.

## Sorting Algorithms

### Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### Selection Sort

Selection Sort is an in-place comparison sorting algorithm. It divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.

The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in the sorted sublist), and moving the sublist boundaries one element to the right.

## Contributing

Contributions are welcome! If you have any ideas for improvements or bug fixes, please feel free to open an issue or submit a pull request.
