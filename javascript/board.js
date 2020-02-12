let board = createFakeBoard();

function getBoard() {
  if (isServer) {
    return board;
  }
  else {
    // Fetch the board from the server
  }
}

function createFakeBoard() {
  return {
    "Cat 1": {
      "What is the capital of Ohio?": {
        Amount: 100,
        Used: false
      },
      "What is the capital of Nebraska?": {
        Amount: 200,
        Used: false
      },
      "What is the capital of Florida?": {
        Amount: 300,
        Used: false
      },
      "What is the capital of Tennese?": {
        Amount: 400,
        Used: false
      },
      "What is the capital of Ukraine?": {
        Amount: 500,
        Used: false
      }
    },
    "Cat 2" : {
      "What is the capital of Edd Ed and Eddy?": {
        Amount: 100,
        Used: false
      },
      "What is the capital of Spongebob?": {
        Amount: 200,
        Used: false
      },
      "What is the capital of Avatar?": {
        Amount: 300,
        Used: false
      },
      "What is the capital of Bob's Burger?": {
        Amount: 400,
        Used: false
      },
      "What is the capital of Kaiji?": {
        Amount: 500,
        Used: false
      }
    },
    "Cat 3" : {
      "What is the capital of Edd Ed and Eddy?": {
        Amount: 100,
        Used: true
      },
      "What is the capital of Spongebob?": {
        Amount: 200,
        Used: false
      },
      "What is the capital of Avatar?": {
        Amount: 300,
        Used: true
      },
      "What is the capital of Bob's Burger?": {
        Amount: 400,
        Used: false
      },
      "What is the capital of Kaiji?": {
        Amount: 500,
        Used: false
      }
    },
    "Cat 4" : {
      "What is the capital of Edd Ed and Eddy?": {
        Amount: 100,
        Used: false
      },
      "What is the capital of Spongebob?": {
        Amount: 200,
        Used: false
      },
      "What is the capital of Avatar?": {
        Amount: 300,
        Used: false
      },
      "What is the capital of Bob's Burger?": {
        Amount: 400,
        Used: false
      },
      "What is the capital of Kaiji?": {
        Amount: 500,
        Used: false
      }
    },
    "Cat 5" : {
      "What is the capital of Edd Ed and Eddy?": {
        Amount: 100,
        Used: false
      },
      "What is the capital of Spongebob?": {
        Amount: 200,
        Used: false
      },
      "What is the capital of Avatar?": {
        Amount: 300,
        Used: false
      },
      "What is the capital of Bob's Burger?": {
        Amount: 400,
        Used: false
      },
      "What is the capital of Kaiji?": {
        Amount: 500,
        Used: false
      }
    }
  }
}

function drawBoard() {
  // Clear The Board
  let div = document.getElementById("contentContainer");
  div.innerHTML = ""
  // Create the Table
  let table = document.createElement("table");
  div.appendChild(table);
  // Create a row to store the new tables
  let row = document.createElement("tr");
  table.appendChild(row);

  for (let category in board) {
    let categoryTable = document.createElement("table");
    row.appendChild(categoryTable);
    let header = document.createElement("tr");

    for (let question in board[category]) {

    }
  }
}
