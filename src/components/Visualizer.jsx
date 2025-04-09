import React, { useState, useEffect } from "react";
import { bubbleSort, selectionSort } from "./SortingAlgorithms";

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 50; i++) {
            newArray.push(Math.floor(Math.random() * 500) + 5);
        }
        setArray(newArray);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen">
            <h2 className="text-2xl text-white font-bold mb-4">Sorting Visualizer</h2>

            <div className="flex items-end space-x-1 bg-gray-800 p-4 rounded-lg">
                {array.map((value, idx) => (
                    <div
                        key={idx}
                        className="w-2 bg-teal-400 rounded-md"
                        style={{ height: `${value}px` }}
                    ></div>
                ))}
            </div>

            <div className="mt-6 flex space-x-4">
                <button onClick={resetArray} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Generate New Array
                </button>
                <button onClick={() => setArray(bubbleSort(array))} className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Bubble Sort
                </button>
                <button onClick={() => selectionSort(array, setArray)} className="px-4 py-2 bg-red-500 text-white rounded-md">
                    Selection Sort
                </button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
