const Buttons = ({ onClick, text }) => {
    return (
      <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <button onClick={onClick}>{text}</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  };

export default Buttons;