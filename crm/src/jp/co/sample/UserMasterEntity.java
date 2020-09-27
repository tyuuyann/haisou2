package jp.co.sample;

import jp.co.sample.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserMasterEntity extends BaseEntity{

	/**
	 * 社員ＩＤ
	 */
	private String id;

	/**
	 * 社員名前
	 */
	private String name;

	/**
	 * パスワード
	 */
	private String pass;

	/**
	 * 権限
	 */
	private String Authority;

	/**
	 * 会社ＩＤ
	 */
	private String CorpId;

	public UserMasterEntity() {
		super("usermaster", "");
		// TODO 自動生成されたコンストラクター・スタブ
	}

}
