import "./Staff.css";

const StaffList = (props) => {
    const {employee} = props;

    return (
      <li>
        <h3>Hello, I'm {employee.name}, the {employee.title}!</h3>
        <p>{employee.credential}</p>
      </li>
    );
  };
  
  export default StaffList;