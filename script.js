
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        .color-btn {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Click the button to change the background color!</h1>
    <button class="color-btn" onclick="changeColor()">Change Color</button>

    <script>
        function changeColor() {
            const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }
   