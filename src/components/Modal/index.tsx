import { Button, StyledModal } from "./styles";

type Props = {
  foto: string,
  nome: string,
  descricao: string,
  porcao: string,
  preco: string,
  onClose: () => void

};

const Modal = ({ foto, nome, descricao, porcao, preco, onClose}: Props) => {
  

  return (
    <StyledModal>
      <button onClick={onClose}>x</button>
      <img src={foto} alt="" />
      <div>
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <p>{porcao}</p>
        <Button to={""}>Adicionar ao carrinho - {preco}</Button>
      </div>
    </StyledModal>
  );
};

export default Modal;
