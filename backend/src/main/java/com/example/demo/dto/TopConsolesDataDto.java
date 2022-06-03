package com.example.demo.dto;

public class TopConsolesDataDto {
    public String platform;
    public String firm;
    public String released;
    public String unitSold;

    public TopConsolesDataDto() {
    }

    public TopConsolesDataDto(String platform, String firm, String released, String unitSold) {
        this.platform = platform;
        this.firm = firm;
        this.released = released;
        this.unitSold = unitSold;
    }

    
}

// package com.example.demo.dto;

// public class TopConsolesDataDto {

//     private String nombre;
//     private String codigo;

//     public TopConsolesDataDto(String nombre, String codigo) {
//         this.nombre = nombre;
//         this.codigo = codigo;
//     }

//     public String getNombre() {
//         return nombre;
//     }

//     public void setNombre(String nombre) {
//         this.nombre = nombre;
//     }

//     public String getCodigo() {
//         return codigo;
//     }

//     public void setCodigo(String codigo) {
//         this.codigo = codigo;
//     }
// }
