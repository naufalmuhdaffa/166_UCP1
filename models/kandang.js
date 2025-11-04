module.exports = (sequelize, DataTypes) => {
    const Kandang = sequelize.define("Kandang", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_hewan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Nama_petugas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Usia_hewan: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Jenis_hewan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Tahun_lahir: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'kandang',
        timeStamp: false,
        freezeTableName: true
    });
    return Kandang;
};