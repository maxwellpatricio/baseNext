"use client";
interface LineProps {
    id: any;
    funcaoUtilizada: string;
    desc: string;
    dataHora: string;
}

const Line: React.FC<LineProps> = ({ id, funcaoUtilizada, desc, dataHora }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <div style={{ flex: 1 }}>{id}</div>
            <div style={{ flex: 1 }}>{funcaoUtilizada}</div>
            <div style={{ flex: 1 }}>{desc}</div>
            <div style={{ flex: 1 }}>{dataHora}</div>
        </div>
    );
};

export default Line;
