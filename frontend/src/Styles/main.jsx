@use "variables";

body {
  font-family: sans-serif;
  margin: 0;
  background: variables.$light;
}

.sidebar {
  width: 250px;
  background: variables.$primary;
  color: white;
  padding: 1rem;
  transition: transform .3s;

  &-open {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    transform: translateX(-100%);
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav li {
    margin: 1rem 0;
  }

  nav a {
    color: white;
    display: flex;
    gap: .5rem;
    text-decoration: none;
    align-items: center;
  }
}

.header {
  background: white;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  .menu-btn {
    border: none;
    background: transparent;
    cursor: pointer;
  }
}

main {
  padding: 1.5rem;
}
