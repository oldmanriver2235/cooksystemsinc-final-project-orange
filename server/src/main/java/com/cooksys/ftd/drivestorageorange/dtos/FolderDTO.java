package com.cooksys.ftd.drivestorageorange.dtos;

import java.util.Date;
import java.util.List;

public class FolderDTO {

	private Long uid;

	private String name;

	private Date created;

	private Date lastModified;

	private Long containerId;
	
	// John addition
	private List<FileDTO> filesContained;

	private boolean inTrash;

	public FolderDTO() {
	}

	public Long getUid() {
		return uid;
	}

	public void setUid(Long uid) {
		this.uid = uid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getLastModified() {
		return lastModified;
	}

	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
	}

	public Long getContainerId() {
		return containerId;
	}

	public void setContainerId(Long containerId) {
		this.containerId = containerId;
	}

	public boolean isInTrash() {
		return inTrash;
	}

	public void setInTrash(boolean inTrash) {
		this.inTrash = inTrash;
	}

	public List<FileDTO> getFilesContained() {
		return filesContained;
	}

	public void setFilesContained(List<FileDTO> filesContained) {
		this.filesContained = filesContained;
	}
	
}
