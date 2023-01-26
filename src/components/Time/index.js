import Colaborador from '../Colaborador';
import './style.css';

const Time = (props) => {
    const getCorSecundaria = {backgroundColor: props.corSecundaria}
    const getCorPrimaria = {borderColor: props.corPrimaria}
    
    return(
        (props.colaboradores.length > 0) && 
        <section className='time' style={getCorSecundaria}>
            <h3 style={getCorPrimaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        corCard={props.corPrimaria}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
    )
}

export default Time;