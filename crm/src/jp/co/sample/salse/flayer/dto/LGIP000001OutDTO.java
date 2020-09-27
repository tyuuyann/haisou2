package jp.co.sample.salse.flayer.dto;

import lombok.Data;

@Data
public class LGIP000001OutDTO {

	/**
	 * チェック結果
	 */
	private String checkVal;

	/**
	 * 社員ＩＤ
	 */
	private String id;

	/**
	 * 社員名
	 */
	private String name;

	/**
	 * 業務
	 */
	private String auth;
}
