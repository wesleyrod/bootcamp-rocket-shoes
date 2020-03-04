import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
          alt="Tênis Adidas"
        />
        <strong>Tênis em promoção</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
          alt="Tênis Adidas"
        />
        <strong>Tênis em promoção</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
          alt="Tênis Adidas"
        />
        <strong>Tênis em promoção</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
          alt="Tênis Adidas"
        />
        <strong>Tênis em promoção</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
          alt="Tênis Adidas"
        />
        <strong>Tênis em promoção</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-28/613_trio5.jpg"
          alt="Tênis Adidas"
        />
        <strong>Tênis em promoção</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
