package jp.co.sample.salse.flayer.controller;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import jp.co.sample.salse.flayer.dto.LGIP000001InDTO;
import jp.co.sample.salse.flayer.dto.LGIP000001OutDTO;
import jp.co.sample.salse.flayer.service.LGIP000001Service;

@Path("/sample2")
public class LGIP000001Controller {

	LGIP000001Service sampleService = new LGIP000001Service();

	@GET
	@Path("/login")
	@Produces(MediaType.APPLICATION_JSON)
	public LGIP000001InDTO hello() {
		LGIP000001InDTO dto = new LGIP000001InDTO();
		dto.setLoginUser("11111");
		dto.setLoginPswd("11111");
		return dto;
	}

	@POST
	@Path("/login2")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public LGIP000001OutDTO login(@Context HttpServletResponse response,LGIP000001InDTO indto) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		LGIP000001OutDTO outdto = new LGIP000001OutDTO();
		outdto = sampleService.init(indto);

		return outdto;
	}

}
