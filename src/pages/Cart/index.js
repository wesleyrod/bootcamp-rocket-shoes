import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Home() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis Adidas</strong>
              <span>R$129,80</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="orange" />
                </button>

                <input type="number" readOnly value="1" />

                <button type="button">
                  <MdAddCircleOutline size={20} color="orange" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <MdDelete size={20} color="orange" />
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$2015,32</strong>
        </Total>
      </footer>
    </Container>
  );
}
