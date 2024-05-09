type Props = {
    handleChackBox: (gender: 'male' | "female") => void
    gender: 'male' | "female"
}
const GenderCheckBox = ({handleChackBox, gender}: Props) => {
    return (
        <div className={'flex'}>
            <div className={'form-control'}>
                <label className={`label gap-2 cursor-pointer ${gender==='male'? 'selected':''}`}>
                    <span className={'label-text'}>Male</span>
                    <input type={'checkbox'}
                           onChange={() => {
                               handleChackBox('male')
                           }}
                           checked={gender === 'male'}
                           className={'checkbox border-slate-900 checkbox-sm checkbox-primary'}/>
                </label>
            </div>
            <div className={'form-control'}>
                <label className={`label gap-2 cursor-pointer ${gender==='female'? 'selected':'' }`}>
                    <span className={'label-text'}>Female</span>
                    <input onChange={() => {
                        handleChackBox('female')
                    }} checked={gender === 'female'} type={'checkbox'}
                           className={'checkbox border-slate-900 checkbox-sm checkbox-primary'}/>
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox;