import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input placeholder="Nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="test">
                    <img src="https://avatars2.githubusercontent.com/u/49010570?s=460&u=7c40a5565f85aa4bb187ffb315083d754b0755ec&v=4" alt=""></img>
                    <div>
                        <strong>rntdc/coronametter</strong>
                        <p>Dados atualizados sobre o coronavirus</p>
                    </div>
                    
                    <FiChevronRight size={20}/>
                </a>
                <a href="test">
                    <img src="https://avatars2.githubusercontent.com/u/49010570?s=460&u=7c40a5565f85aa4bb187ffb315083d754b0755ec&v=4" alt=""></img>
                    <div>
                        <strong>rntdc/coronametter</strong>
                        <p>Dados atualizados sobre o coronavirus</p>
                    </div>
                    
                    <FiChevronRight size={20}/>
                </a>
                <a href="test">
                    <img src="https://avatars2.githubusercontent.com/u/49010570?s=460&u=7c40a5565f85aa4bb187ffb315083d754b0755ec&v=4" alt=""></img>
                    <div>
                        <strong>rntdc/coronametter</strong>
                        <p>Dados atualizados sobre o coronavirus</p>
                    </div>
                    
                    <FiChevronRight size={20}/>
                </a>
                <a href="test">
                    <img src="https://avatars2.githubusercontent.com/u/49010570?s=460&u=7c40a5565f85aa4bb187ffb315083d754b0755ec&v=4" alt=""></img>
                    <div>
                        <strong>rntdc/coronametter</strong>
                        <p>Dados atualizados sobre o coronavirus</p>
                    </div>
                    
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;