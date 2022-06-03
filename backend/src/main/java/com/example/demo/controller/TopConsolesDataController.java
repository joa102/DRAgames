package com.example.demo.controller;

import java.util.List;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TopConsolesDataDto;
import com.example.demo.services.TopConsolesDataService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/topConsoles")
public class TopConsolesDataController {

    @Autowired(required = true)
    private TopConsolesDataService topConsolesDataService;

    @GetMapping("/data")
    public ResponseEntity<List<TopConsolesDataDto>> getTopConsolesData() throws IOException {
        List<TopConsolesDataDto> topConsolesData = topConsolesDataService.retrieveTopConsolesData();
        return new ResponseEntity(topConsolesData, HttpStatus.OK);
    }
}

// package com.example.demo.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.dto.TopConsolesDataDto;
// import com.example.demo.services.TopConsolesDataService;

// @RestController
// @RequestMapping("/topConsoles")
// public class TopConsolesDataController {

//     @Autowired
//     private TopConsolesDataService topConsolesDataService;

//     @GetMapping("data")
//     public ResponseEntity<List<TopConsolesDataDto>> getTopConsolesData() {
//         return new ResponseEntity<List<TopConsolesDataDto>>(topConsolesDataService.retrieveTopConsolesData(),
//                 HttpStatus.OK);
//     }
// }
