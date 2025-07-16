```css
body {
  font-family: sans-serif;
  background: #fefefe;
  margin: 20px;
}

.malla {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.semestre {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
}

.semestre h3 {
  text-align: center;
  margin-top: 0;
}

.ramo {
  background: pink;
  margin: 5px 0;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
}

.ramo.aprobado {
  background: purple;
  color: white;
  text-decoration: line-through;
}

.ramo.bloqueado {
  background: lightgray;
  color: #777;
  cursor: not-allowed;
}
```

